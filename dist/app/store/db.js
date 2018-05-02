'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _dexie2.default('app');

db.version(1).stores({
  forms: '++id, name, description, *questions',
  questions: '++id, prompt, type, options',
  responses: '++id, formId, questions'
});

exports.default = db;