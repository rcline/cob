'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addForm = addForm;
exports.deleteForm = deleteForm;
exports.updateForm = updateForm;

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _actionEnums = require('../actionEnums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addForm(form) {
  return function (dispatch) {
    return _db2.default.forms.add(form).then(function (id) {
      form.id = id;
      dispatch({
        type: _actionEnums.FORMS_ADD,
        data: form
      });

      return form;
    });
  };
}

function deleteForm(id) {
  return function (dispatch) {
    return _db2.default.forms.delete(id).then(function () {
      dispatch({
        type: _actionEnums.FORMS_DELETE,
        data: id
      });

      return id;
    });
  };
}

function updateForm(form) {
  return function (dispatch) {
    return _db2.default.forms.update(form.id, form).then(function () {
      dispatch({
        type: _actionEnums.FORMS_UPDATE,
        data: form
      });

      return form;
    });
  };
}

exports.default = {
  addForm: addForm,
  deleteForm: deleteForm,
  updateForm: updateForm
};