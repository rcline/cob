'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paginate = function Paginate(_ref) {
  var className = _ref.className,
      onPageDown = _ref.onPageDown,
      onPageUp = _ref.onPageUp,
      page = _ref.page;
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      'span',
      null,
      'Page #',
      page
    ),
    _react2.default.createElement(
      'button',
      { onClick: onPageDown },
      '<'
    ),
    _react2.default.createElement(
      'button',
      { onClick: onPageUp },
      '>'
    )
  );
};

Paginate.propTypes = {
  className: _propTypes2.default.string,
  onPageDown: _propTypes2.default.func,
  onPageUp: _propTypes2.default.func,
  page: _propTypes2.default.number
};

Paginate.defaultProps = {
  className: '',
  onPageDown: function onPageDown() {},
  onPageUp: function onPageUp() {},
  page: 1
};

exports.default = Paginate;