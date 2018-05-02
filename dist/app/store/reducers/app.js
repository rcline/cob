'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _actionEnums = require('../actionEnums');

var INITIAL_STATE = 'BTC-ETH';

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var nextState = state;

  switch (action.type) {
    case _actionEnums.APP_LOAD:
      nextState = formsObj;
      break;
    default:
      break;
  }

  return nextState;
}

exports.app = app;
exports.default = app;