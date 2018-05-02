'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _exchanges = require('../../exchanges');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

function combineCollections(collections, descending) {
  var combined = collections.reduce(function (acc, val) {
    return acc.concat(val);
  }, []);
  return combined.sort(function (a, b) {
    if (descending) {
      return b.rate - a.rate;
    } else {
      return a.rate - b.rate;
    }
  });
}

router.get('/orderbook', function (req, res, next) {
  var market = req.params.market;

  Promise.all([_exchanges.bittrex.getOrderBook(market), _exchanges.poloniex.getOrderBook(market)]).then(function (exchanges) {
    var buyCollection = [];
    var sellCollection = [];

    exchanges.forEach(function (exchange) {
      if (exchange) {
        buyCollection.push(exchange.buy);
        sellCollection.push(exchange.sell);
      }
    });

    var data = {
      buy: combineCollections(buyCollection, true),
      sell: combineCollections(sellCollection)
    };

    res.json(data);
  }).catch(function (error) {
    console.log(error);
    next();
  });
});

exports.default = router;