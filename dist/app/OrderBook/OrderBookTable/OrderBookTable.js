'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _paginator = require('../../paginator');

var _paginator2 = _interopRequireDefault(_paginator);

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
    _classCallCheck(this, OrderBookTable);

    return _possibleConstructorReturn(this, (OrderBookTable.__proto__ || Object.getPrototypeOf(OrderBookTable)).apply(this, arguments));
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
          data = _props.data,
          isAskOrderBook = _props.isAskOrderBook,
          PaginateComponent = _props.PaginateComponent;

      var sum = 0;
      var BOOK = isAskOrderBook ? BOOK_TYPES.ASK : BOOK_TYPES.BID;

      this.getSum = function () {
        return sum;
      };
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'table',
          { className: _OrderBookTable2.default.table },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              BOOK.map(function (col, i) {
                return _react2.default.createElement(
                  'th',
                  { key: i },
                  col.text
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            data && data.length > 0 && data.map(function (item, i) {
              sum += _this2.getTotal(item);
              return _react2.default.createElement(
                'tr',
                { key: i },
                BOOK.map(function (col, i) {
                  return _react2.default.createElement(
                    'td',
                    { key: i, className: col.classes },
                    _this2[col.method](item).toFixed(8)
                  );
                })
              );
            })
          )
        ),
        PaginateComponent
      );
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
  isAskOrderBook: _propTypes2.default.bool,
  PaginateComponent: _propTypes2.default.node.isRequired
};
OrderBookTable.defaultProps = {
  className: '',
  data: [],
  isAskOrderBook: false
};
exports.default = (0, _paginator2.default)(OrderBookTable);