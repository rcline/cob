'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _MarketHistory = require('./MarketHistory');

var _MarketHistory2 = _interopRequireDefault(_MarketHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
  return {
    data: state.markethistory
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_MarketHistory2.default);