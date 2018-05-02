'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _actionEnums = require('../actionEnums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get() {
  return function (dispatch) {
    (0, _isomorphicFetch2.default)('/api/markethistory').then(function (response) {
      return response.json();
    }).then(function (data) {
      return dispatch({
        type: _actionEnums.MARKET_HISTORY_GET,
        data: data
      });
    });
  };
}

exports.default = {
  get: get
};