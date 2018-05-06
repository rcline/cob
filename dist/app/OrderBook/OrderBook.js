'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OrderBook = require('./OrderBook.css');

var _OrderBook2 = _interopRequireDefault(_OrderBook);

var _OrderBookTable = require('./OrderBookTable');

var _OrderBookTable2 = _interopRequireDefault(_OrderBookTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrderBook(_ref) {
  var data = _ref.data;

  return _react2.default.createElement(
    'div',
    { className: _OrderBook2.default.root },
    _react2.default.createElement(_OrderBookTable2.default, { className: _OrderBook2.default.buyBook, data: data.buy, overlapAmount: data.sell && data.sell[0].rate }),
    _react2.default.createElement(_OrderBookTable2.default, { className: _OrderBook2.default.sellBook, data: data.sell, overlapAmount: data.buy && data.buy[0].rate, isAskOrderBook: true })
  );
}

OrderBook.propTypes = {
  data: _propTypes2.default.shape({
    buy: _propTypes2.default.array,
    sell: _propTypes2.default.array
  })
};

OrderBook.defaultProps = {
  data: {}
};

exports.default = OrderBook;