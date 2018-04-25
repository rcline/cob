'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MarketHistory = require('./MarketHistory');

var _MarketHistory2 = _interopRequireDefault(_MarketHistory);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.compose)()(_MarketHistory2.default);