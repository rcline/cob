'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forms = undefined;

var _actionEnums = require('../actionEnums');

var INITIAL_STATE = [];

function forms() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  var nextState = state;

  switch (action.type) {
    case _actionEnums.APP_LOAD:
      var formsObj = action.data.forms.reduce(function (acc, cur) {
        acc[cur.id] = cur;
        return acc;
      }, {});
      nextState = formsObj;
      break;
    case _actionEnums.FORMS_ADD:
    case _actionEnums.FORMS_UPDATE:
      nextState[action.data.id] = action.data;
      break;
    case _actionEnums.FORMS_DELETE:
      delete nextState[action.data];
      break;
    default:
      break;
  }

  return nextState;
}

exports.forms = forms;
exports.default = forms;