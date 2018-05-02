'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionEnums = require('../actionEnums');

var INITIAL_STATE = 'BTC-ETH';

function market() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var nextState = state;

  switch (action.type) {
    case _actionEnums.MARKET_UPDATE:
      nextState = action.data;
      break;
    default:
      break;
  }

  return nextState;
}

exports.default = market;