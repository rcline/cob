'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _paginator = require('../paginator');

var _paginator2 = _interopRequireDefault(_paginator);

var _MarketHistory = require('./MarketHistory.css');

var _MarketHistory2 = _interopRequireDefault(_MarketHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MarketHistory(_ref) {
  var data = _ref.data,
      PaginateComponent = _ref.PaginateComponent;

  return _react2.default.createElement(
    'div',
    { className: _MarketHistory2.default.root },
    _react2.default.createElement(
      'table',
      { className: _MarketHistory2.default.table },
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
        data && data.length > 0 && data.map(function (item) {
          return _react2.default.createElement(
            'tr',
            { key: item.id },
            _react2.default.createElement(
              'td',
              null,
              item.date
            ),
            _react2.default.createElement(
              'td',
              { className: (0, _classnames2.default)(_MarketHistory2.default.type, item.type === 'sell' ? _MarketHistory2.default.ask : _MarketHistory2.default.bid) },
              item.type
            ),
            _react2.default.createElement(
              'td',
              null,
              item.rate.toFixed(8)
            ),
            _react2.default.createElement(
              'td',
              null,
              item.amount.toFixed(8)
            ),
            _react2.default.createElement(
              'td',
              null,
              item.total.toFixed(8)
            )
          );
        })
      )
    ),
    PaginateComponent
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
  })),
  PaginateComponent: _propTypes2.default.node.isRequired
};

MarketHistory.defaultProps = {
  data: []
};

exports.default = (0, _paginator2.default)(MarketHistory);