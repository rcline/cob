'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarketHistory = exports.getOrderBook = exports.getMarketSummary = exports.getMarketSummaries = exports.getTicker = exports.getCurrencies = undefined;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Bittrex
 * https://bittrex.com/api/{version}/{method}?param=value
 *
 * ex: https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both
 */

var baseUrl = 'https://bittrex.com/api/v1.1/public';

var getCurrencies = function getCurrencies() {
  var url = baseUrl + '/getcurrencies';
  (0, _nodeFetch2.default)(url);
};

var getTicker = function getTicker() {
  var url = baseUrl + '/getticker';
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json();
  });
};

var getMarketSummaries = function getMarketSummaries() {
  var url = baseUrl + '/getmarketsummaries';
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json();
  });
};

var getMarketSummary = function getMarketSummary(market) {
  market = market || 'BTC-ETH';
  var url = baseUrl + '/getmarketsummary?market=' + market;
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json();
  });
};

var getOrderBook = function getOrderBook(market) {
  market = market || 'BTC-ETH';
  var url = baseUrl + '/getorderbook?market=' + market + '&type=both';
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json().then(function (json) {
      return {
        'buy': json.result.buy.map(function (order) {
          return {
            rate: order.Rate,
            amount: order.Quantity,
            exchange: 'bittrex'
          };
        }),
        'sell': json.result.sell.map(function (order) {
          return {
            rate: order.Rate,
            amount: order.Quantity,
            exchange: 'bittrex'
          };
        })
      };
    });
  });
};

var getMarketHistory = function getMarketHistory(market) {
  market = market || 'BTC-ETH';
  var url = baseUrl + '/getmarkethistory?market=' + market;
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json().then(function (json) {
      return json.result.map(function (order) {
        return {
          id: order.Id, // 231733061,
          date: new Date(order.TimeStamp).getTime(), // "2018-04-23T04:59:23.567",
          type: order.OrderType.toLowerCase(), // "SELL",
          // FillType: "PARTIAL_FILL",
          rate: order.Price, // 0.0713,
          amount: order.Quantity, // 0.06275747,
          total: order.Total, // 0.0044746,
          exchange: 'bittrex'
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