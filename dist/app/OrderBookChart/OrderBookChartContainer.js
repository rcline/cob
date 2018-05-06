'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _OrderBookChart = require('./OrderBookChart');

var _OrderBookChart2 = _interopRequireDefault(_OrderBookChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    data: state.orderbook.exchanges
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_OrderBookChart2.default);