'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionEnums = require('../actionEnums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addTotals(data) {
  var sum = 0;
  data.forEach(function (item) {
    sum += item.amount;
    item.sum = sum;
  });
  return data;
}

function get() {
  return function (dispatch) {
    (0, _isomorphicFetch2.default)('/api/orderbook').then(function (response) {
      return response.json();
    }).then(function (data) {
      var exchanges = {};

      Object.keys(data.exchanges).forEach(function (key) {
        exchanges[key] = {
          buy: addTotals(data.exchanges[key].buy),
          sell: addTotals(data.exchanges[key].sell)
        };
      });

      return dispatch({
        type: _actionEnums.ORDER_BOOK_GET,
        data: {
          combined: {
            buy: addTotals(data.combined.buy),
            sell: addTotals(data.combined.sell)
          },
          exchanges: exchanges
        }
      });
    });
  };
}

exports.default = {
  get: get
};