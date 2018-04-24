'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getorderbook = require('./getorderbook');

var _getorderbook2 = _interopRequireDefault(_getorderbook);

var _getmarkethistory = require('./getmarkethistory');

var _getmarkethistory2 = _interopRequireDefault(_getmarkethistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/api', _getorderbook2.default);
router.use('/api', _getmarkethistory2.default);

exports.default = router;