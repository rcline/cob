'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questions = undefined;

var _actionEnums = require('../actionEnums');

var INITIAL_STATE = [];

function questions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var nextState = state;

  switch (action.type) {
    case _actionEnums.APP_LOAD:
      var questionsObj = action.data.questions.reduce(function (acc, cur) {
        acc[cur.id] = cur;
        return acc;
      }, {});
      nextState = questionsObj;
      break;
    case _actionEnums.QUESTIONS_ADD:
    case _actionEnums.QUESTIONS_UPDATE:
      nextState[action.data.id] = action.data;
      break;
    case _actionEnums.QUESTIONS_DELETE:
      delete nextState[action.data];
      break;
    default:
      break;
  }

  return nextState;
}

exports.questions = questions;
exports.default = questions;