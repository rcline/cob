'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addResponse = addResponse;
exports.deleteResponse = deleteResponse;
exports.updateResponse = updateResponse;

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _actionEnums = require('../actionEnums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addResponse(response) {
  return function (dispatch) {
    return _db2.default.responses.add(response).then(function (id) {
      response.id = id;
      dispatch({
        type: _actionEnums.RESPONSES_ADD,
        data: response
      });

      return response;
    });
  };
}

function deleteResponse(id) {
  return function (dispatch) {
    return _db2.default.responses.delete(id).then(function () {
      dispatch({
        type: _actionEnums.RESPONSES_DELETE,
        data: id
      });

      return id;
    });
  };
}

function updateResponse(response) {
  return function (dispatch) {
    return _db2.default.responses.update(response.id, response).then(function () {
      dispatch({
        type: _actionEnums.RESPONSES_UPDATE,
        data: response
      });

      return response;
    });
  };
}

exports.default = {
  addResponse: addResponse,
  deleteResponse: deleteResponse,
  updateResponse: updateResponse
};