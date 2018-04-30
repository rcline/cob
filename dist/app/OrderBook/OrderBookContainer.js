'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _OrderBook = require('./OrderBook');

var _OrderBook2 = _interopRequireDefault(_OrderBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderBookContainer = function (_Component) {
  _inherits(OrderBookContainer, _Component);

  function OrderBookContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderBookContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderBookContainer.__proto__ || Object.getPrototypeOf(OrderBookContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      orderbook: {}
    }, _this.setOrderbook = function (orderbook) {
      _this.setState({ orderbook: orderbook });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderBookContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _isomorphicFetch2.default)('/api/orderbook').then(function (response) {
        return response.json();
      }).then(this.setOrderbook);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_OrderBook2.default, { data: this.state.orderbook });
    }
  }]);

  return OrderBookContainer;
}(_react.Component);

exports.default = OrderBookContainer;