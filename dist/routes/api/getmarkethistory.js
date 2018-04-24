'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _exchanges = require('../../exchanges');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/markethistory', function (req, res, next) {

  Promise.all([_exchanges.bittrex.getMarketHistory(), _exchanges.poloniex.getMarketHistory()]).then(function (values) {
    var bittrexData = values[0];
    var poloniexData = values[1];

    res.json({
      bittrex: bittrexData,
      poloniex: poloniexData
    });
  }).catch(function (error) {
    console.log(error);
    next();
  });
});

exports.default = router;