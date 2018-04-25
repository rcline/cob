'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MarketHistory(_ref) {
  var data = _ref.data;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Date'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Type (Buy/Sell)'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Price (Bid/Ask)'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Amount (units)'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Total (units)'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        data.forEach(function (item) {
          return _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              item.date
            ),
            _react2.default.createElement(
              'td',
              null,
              item.type
            ),
            _react2.default.createElement(
              'td',
              null,
              item.rate
            ),
            _react2.default.createElement(
              'td',
              null,
              item.amount
            ),
            _react2.default.createElement(
              'td',
              null,
              item.total
            )
          );
        })
      )
    )
  );
}

MarketHistory.propTypes = {
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    date: _propTypes2.default.number,
    type: _propTypes2.default.string,
    rate: _propTypes2.default.number,
    amount: _propTypes2.default.number,
    total: _propTypes2.default.number,
    exchange: _propTypes2.default.string
  }))
};

MarketHistory.defaultProps = {
  data: []
};

exports.default = MarketHistory;