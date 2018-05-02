'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _OrderBook = require('./OrderBook');

var _OrderBook2 = _interopRequireDefault(_OrderBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    data: state.orderbook
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_OrderBook2.default);