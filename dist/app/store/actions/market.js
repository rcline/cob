'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMarket = updateMarket;

var _actionEnums = require('../actionEnums');

function updateMarket(data) {
  return function (dispatch) {
    dispatch({
      type: _actionEnums.MARKET_UPDATE,
      data: data
    });
  };
}

exports.default = {
  updateMarket: updateMarket
};