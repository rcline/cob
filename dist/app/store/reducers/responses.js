'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responses = undefined;

var _actionEnums = require('../actionEnums');

var INITIAL_STATE = [];

function responses() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var nextState = state;

  switch (action.type) {
    case _actionEnums.APP_LOAD:
      var responsesObj = action.data.responses.reduce(function (acc, cur) {
        acc[cur.id] = cur;
        return acc;
      }, {});
      nextState = responsesObj;
      break;
    case _actionEnums.RESPONSES_ADD:
    case _actionEnums.RESPONSES_UPDATE:
      nextState[action.data.id] = action.data;
      break;
    case _actionEnums.RESPONSES_DELETE:
      delete nextState[action.data];
      break;
    default:
      break;
  }

  return nextState;
}

exports.responses = responses;
exports.default = responses;