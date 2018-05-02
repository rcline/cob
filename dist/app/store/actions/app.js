'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadApp = loadApp;

require('../actionEnums');

function loadApp() {
  return function (dispatch) {
    getAll(dispatch);
  };
}

exports.default = {
  loadApp: loadApp
};