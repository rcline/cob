'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _MarketHistory = require('./MarketHistory');

var _MarketHistory2 = _interopRequireDefault(_MarketHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarketHistoryContainer = function (_Component) {
  _inherits(MarketHistoryContainer, _Component);

  function MarketHistoryContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MarketHistoryContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MarketHistoryContainer.__proto__ || Object.getPrototypeOf(MarketHistoryContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      history: []
    }, _this.setHistory = function (history) {
      _this.setState({ history: history });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MarketHistoryContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _isomorphicFetch2.default)('/api/markethistory').then(function (response) {
        return response.json();
      }).then(this.setHistory);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MarketHistory2.default, { data: this.state.history });
    }
  }]);

  return MarketHistoryContainer;
}(_react.Component);

exports.default = MarketHistoryContainer;