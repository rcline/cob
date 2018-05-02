'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarketHistory = exports.getOrderBook = exports.getMarketSummary = exports.getMarketSummaries = exports.getTicker = exports.getCurrencies = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Poloniex
 * https://poloniex.com/public?command=returnTicker{method}&param=value
 *
 * ex: https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_NXT&depth=10
 */

var baseUrl = 'https://poloniex.com/public';

var normalizeMarket = function normalizeMarket(market) {
  return market && market.replace('-', '_');
};

var getCurrencies = function getCurrencies() {
  var url = baseUrl + '?command=returnCurrencies';
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json();
  });
};

var getTicker = function getTicker() {
  var url = baseUrl + '?command=returnTicker';
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json();
  });
};

var getMarketSummaries = function getMarketSummaries() {};

var getMarketSummary = function getMarketSummary() {};

var getOrderBook = function getOrderBook(market) {
  market = normalizeMarket(market) || 'BTC_ETH';
  var url = baseUrl + '?command=returnOrderBook&currencyPair=' + market + '&depth=100';
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json().then(function (json) {
      return {
        'buy': json.bids.map(function (order) {
          return {
            rate: parseFloat(order[0]),
            amount: order[1],
            exchange: 'poloniex'
          };
        }),
        'sell': json.asks.map(function (order) {
          return {
            rate: parseFloat(order[0]),
            amount: order[1],
            exchange: 'poloniex'
          };
        })
      };
    });
  });
};

// https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372
var getMarketHistory = function getMarketHistory(market) {
  market = normalizeMarket(market) || 'BTC_ETH';
  var url = baseUrl + '?command=returnTradeHistory&currencyPair=' + market;
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json().then(function (json) {
      return json.slice(0, 100).map(function (order) {
        return {
          // globalTradeID": 364253389,
          id: order.tradeID, // 42976537,
          date: new Date(order.date).getTime(), // "2018-04-23 04:59:57",
          type: order.type, // "sell",
          rate: parseFloat(order.rate), // "0.07128901",
          amount: parseFloat(order.amount), // "0.08711866",
          total: parseFloat(order.total), // "0.00621060"
          exchange: 'poloniex'
        };
      });
    });
  });
};

exports.getCurrencies = getCurrencies;
exports.getTicker = getTicker;
exports.getMarketSummaries = getMarketSummaries;
exports.getMarketSummary = getMarketSummary;
exports.getOrderBook = getOrderBook;
exports.getMarketHistory = getMarketHistory;