'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQuestion = addQuestion;
exports.deleteQuestion = deleteQuestion;
exports.updateQuestion = updateQuestion;

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _actionEnums = require('../actionEnums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addQuestion(question) {
  return function (dispatch) {
    return _db2.default.questions.add(question).then(function (id) {
      question.id = id;
      dispatch({
        type: _actionEnums.QUESTIONS_ADD,
        data: question
      });

      return question;
    });
  };
}

function deleteQuestion(id) {
  return function (dispatch) {
    return _db2.default.questions.delete(id).then(function () {
      dispatch({
        type: _actionEnums.QUESTIONS_DELETE,
        data: id
      });

      return id;
    });
  };
}

function updateQuestion(question) {
  return function (dispatch) {
    return _db2.default.questions.update(question.id, question).then(function () {
      dispatch({
        type: _actionEnums.QUESTIONS_UPDATE,
        data: question
      });

      return question;
    });
  };
}

exports.default = {
  addQuestion: addQuestion,
  deleteQuestion: deleteQuestion,
  updateQuestion: updateQuestion
};