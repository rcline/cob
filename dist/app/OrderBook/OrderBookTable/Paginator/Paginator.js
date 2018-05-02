'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paginate = require('./Paginate');

var _Paginate2 = _interopRequireDefault(_Paginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function paginator(PaginatedComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(Paginator, _Component);

    function Paginator() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Paginator);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Paginator.__proto__ || Object.getPrototypeOf(Paginator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        items: [],
        itemsPerPage: 10,
        page: 1
      }, _this.onPageDown = function () {
        if (_this.state.page <= 1) {
          return undefined;
        }

        _this.setState({
          page: _this.state.page - 1
        });
      }, _this.onPageUp = function () {
        var _this$state = _this.state,
            items = _this$state.items,
            itemsPerPage = _this$state.itemsPerPage,
            page = _this$state.page;


        if (page >= Math.ceil(items.length / itemsPerPage)) {
          return undefined;
        }

        _this.setState({
          page: page + 1
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Paginator, [{
      key: 'render',
      value: function render() {
        var _state = this.state,
            items = _state.items,
            itemsPerPage = _state.itemsPerPage,
            page = _state.page;

        var _props = this.props,
            data = _props.data,
            rest = _objectWithoutProperties(_props, ['data']);

        var displayedData = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

        return _react2.default.createElement(PaginatedComponent, _extends({}, rest, {
          data: displayedData,
          PaginateComponent: _react2.default.createElement(_Paginate2.default, { page: page, onPageDown: this.onPageDown, onPageUp: this.onPageUp })
        }));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, prevState) {
        return {
          items: nextProps.data
        };
      }
    }]);

    return Paginator;
  }(_react.Component), _class.propTypes = {
    data: _propTypes2.default.array
  }, _class.defaultProps = {
    data: []
  }, _temp2;
}

exports.default = paginator;