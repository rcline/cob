'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.poloniex = exports.bittrex = undefined;

var _bittrex = require('./bittrex');

var bittrex = _interopRequireWildcard(_bittrex);

var _poloniex = require('./poloniex');

var poloniex = _interopRequireWildcard(_poloniex);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.bittrex = bittrex;
exports.poloniex = poloniex;