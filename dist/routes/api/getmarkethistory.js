'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _exchanges = require('../../exchanges');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

function combineCollections(collections) {
  var combined = collections.reduce(function (acc, val) {
    return acc.concat(val);
  }, []);
  return combined.sort(function (a, b) {
    return b.date - a.date;
  });
}

router.get('/markethistory', function (req, res, next) {
  Promise.all([_exchanges.bittrex.getMarketHistory(), _exchanges.poloniex.getMarketHistory()]).then(function (exchanges) {
    var data = combineCollections(exchanges);

    res.json(data);
  }).catch(function (error) {
    console.log(error);
    next();
  });
});

exports.default = router;