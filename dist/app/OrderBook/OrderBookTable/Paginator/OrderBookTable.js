'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OrderBookTable = require('./OrderBookTable.css');

var _OrderBookTable2 = _interopRequireDefault(_OrderBookTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOK_TYPES = {
  BID: [{ text: 'Sum', method: 'getSum' }, { text: 'Total', method: 'getTotal' }, { text: 'Size', method: 'getSize' }, { text: 'Bid', method: 'getRate', classes: _OrderBookTable2.default.bid }],
  ASK: [{ text: 'Ask', method: 'getRate', classes: _OrderBookTable2.default.ask }, { text: 'Size', method: 'getSize' }, { text: 'Total', method: 'getTotal' }, { text: 'Sum', method: 'getSum' }]
};

var OrderBookTable = function (_Component) {
  _inherits(OrderBookTable, _Component);

  function OrderBookTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderBookTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderBookTable.__proto__ || Object.getPrototypeOf(OrderBookTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      data: [],
      itemsPerPage: 10,
      page: 1
    }, _this.onPageDown = function () {
      if (_this.state.page <= 1) {
        return undefined;
      }

      _this.setState({
        page: _this.state.page - 1
      });
    }, _this.onPageUp = function () {
      var _this$state = _this.state,
          data = _this$state.data,
          itemsPerPage = _this$state.itemsPerPage,
          page = _this$state.page;


      if (page >= Math.ceil(data.length / itemsPerPage)) {
        return undefined;
      }

      _this.setState({
        page: page + 1
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderBookTable, [{
    key: 'getTotal',
    value: function getTotal(item) {
      return item.amount * item.rate;
    }
  }, {
    key: 'getSize',
    value: function getSize(item) {
      return item.amount;
    }
  }, {
    key: 'getRate',
    value: function getRate(item) {
      return item.rate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          isAskOrderBook = _props.isAskOrderBook;
      var _state = this.state,
          data = _state.data,
          itemsPerPage = _state.itemsPerPage,
          page = _state.page;

      var sum = 0;
      var BOOK = isAskOrderBook ? BOOK_TYPES.ASK : BOOK_TYPES.BID;

      this.getSum = function () {
        return sum;
      };

      var displayedData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              BOOK.map(function (col) {
                return _react2.default.createElement(
                  'th',
                  { className: col.classes },
                  col.text
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            displayedData && displayedData.length > 0 && displayedData.map(function (item, i) {
              sum += _this2.getTotal(item);
              return _react2.default.createElement(
                'tr',
                { key: i },
                BOOK.map(function (col) {
                  return _react2.default.createElement(
                    'td',
                    { className: col.classes },
                    _this2[col.method](item).toFixed(8)
                  );
                })
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            'Page #',
            this.state.page
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.onPageDown },
            '<'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.onPageUp },
            '>'
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        data: nextProps.data
      };
    }
  }]);

  return OrderBookTable;
}(_react.Component);

OrderBookTable.propTypes = {
  className: _propTypes2.default.string,
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    rate: _propTypes2.default.number,
    amount: _propTypes2.default.number,
    exchange: _propTypes2.default.string
  })),
  isAskOrderBook: _propTypes2.default.bool
};

OrderBookTable.defaultProps = {
  className: '',
  data: [],
  isAskOrderBook: false
};

exports.default = OrderBookTable;