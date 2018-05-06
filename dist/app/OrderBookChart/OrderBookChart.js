'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OrderBookChart = require('./OrderBookChart.css');

var _OrderBookChart2 = _interopRequireDefault(_OrderBookChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderBookChart = function (_Component) {
  _inherits(OrderBookChart, _Component);

  function OrderBookChart() {
    _classCallCheck(this, OrderBookChart);

    return _possibleConstructorReturn(this, (OrderBookChart.__proto__ || Object.getPrototypeOf(OrderBookChart)).apply(this, arguments));
  }

  _createClass(OrderBookChart, [{
    key: 'getAxisMinMaxValues',
    value: function getAxisMinMaxValues(data) {
      var xmax = 0;
      var xmin = Infinity;
      var ymax = 0;
      var ymin = Infinity;

      data.forEach(function (item) {
        xmax = item.rate > xmax ? item.rate : xmax;
        xmin = item.rate < xmin ? item.rate : xmin;
        ymax = item.sum > ymax ? item.sum : ymax;
        ymin = item.sum < ymin ? item.sum : ymin;
      });

      return {
        x: {
          max: xmax,
          min: xmin
        },
        y: {
          max: ymax,
          min: ymin
        }
      };
    }
  }, {
    key: 'getChartPoints',
    value: function getChartPoints(data, minMaxValues, width, height, offsetX, offsetY) {
      return data.map(function (order, i) {
        var normalizeX = (order.rate - minMaxValues.x.min) / (minMaxValues.x.max - minMaxValues.x.min);
        var scaleX = width - offsetY;
        var normalizeY = (order.sum - minMaxValues.y.min) / (minMaxValues.y.max - minMaxValues.y.min);
        var scaleY = height - offsetX;
        var x = normalizeX * scaleX + offsetY;
        var y = height - offsetX - normalizeY * scaleY;

        if (i === 0) {
          return 'M' + x + ',' + y;
        } else {
          return 'L' + x + ',' + y;
        }
      }).join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          height = _props.height,
          marginX = _props.marginX,
          marginY = _props.marginY,
          width = _props.width;


      var bittrex = data && data.bittrex;
      var poloniex = data && data.poloniex;

      if (!bittrex || !poloniex) {
        return null;
      }

      var minMaxValues = this.getAxisMinMaxValues([].concat(bittrex.buy).concat(bittrex.sell).concat(poloniex.buy).concat(poloniex.sell));
      var _minMaxValues$x = minMaxValues.x,
          xmax = _minMaxValues$x.max,
          xmin = _minMaxValues$x.min,
          _minMaxValues$y = minMaxValues.y,
          ymax = _minMaxValues$y.max,
          ymin = _minMaxValues$y.min;


      return _react2.default.createElement(
        'svg',
        {
          ref: function ref(el) {
            return _this2.elSvg = el;
          },
          className: _OrderBookChart2.default.root,
          width: width,
          height: height
        },
        _react2.default.createElement(
          'title',
          null,
          'Layered orderbook chart'
        ),
        _react2.default.createElement(
          'g',
          { className: _OrderBookChart2.default.grid },
          _react2.default.createElement('line', { x1: marginY, x2: marginY, y1: 0, y2: height - marginX })
        ),
        _react2.default.createElement(
          'g',
          { className: _OrderBookChart2.default.grid },
          _react2.default.createElement('line', { x1: marginY, x2: width, y1: height - marginX, y2: height - marginX })
        ),
        _react2.default.createElement(
          'g',
          { className: (0, _classnames2.default)(_OrderBookChart2.default.labels, _OrderBookChart2.default.labelsX) },
          _react2.default.createElement(
            'text',
            { x: marginY, y: height - marginX / 2 },
            xmin
          ),
          _react2.default.createElement(
            'text',
            { x: width - 50, y: height - marginX / 2 },
            xmax
          )
        ),
        _react2.default.createElement(
          'g',
          { className: (0, _classnames2.default)(_OrderBookChart2.default.labels, _OrderBookChart2.default.labelsY) },
          _react2.default.createElement(
            'text',
            { x: marginY - 10, y: height - marginX },
            '0'
          ),
          _react2.default.createElement(
            'text',
            { x: marginY - 10, y: 20 },
            parseInt(ymax)
          )
        ),
        _react2.default.createElement('path', {
          className: (0, _classnames2.default)(_OrderBookChart2.default.data, _OrderBookChart2.default.bittrex, _OrderBookChart2.default.buy),
          d: this.getChartPoints(bittrex.buy, minMaxValues, width, height, marginX, marginY)
        }),
        _react2.default.createElement('path', {
          className: (0, _classnames2.default)(_OrderBookChart2.default.data, _OrderBookChart2.default.bittrex, _OrderBookChart2.default.sell),
          d: this.getChartPoints(bittrex.sell, minMaxValues, width, height, marginX, marginY)
        }),
        _react2.default.createElement('path', {
          className: (0, _classnames2.default)(_OrderBookChart2.default.data, _OrderBookChart2.default.poloniex, _OrderBookChart2.default.buy),
          d: this.getChartPoints(poloniex.buy, minMaxValues, width, height, marginX, marginY)
        }),
        _react2.default.createElement('path', {
          className: (0, _classnames2.default)(_OrderBookChart2.default.data, _OrderBookChart2.default.poloniex, _OrderBookChart2.default.sell),
          d: this.getChartPoints(poloniex.sell, minMaxValues, width, height, marginX, marginY)
        })
      );
    }
  }]);

  return OrderBookChart;
}(_react.Component);

OrderBookChart.propTypes = {
  data: _propTypes2.default.object,
  height: _propTypes2.default.number,
  marginX: _propTypes2.default.number,
  marginY: _propTypes2.default.number,
  width: _propTypes2.default.number
};
OrderBookChart.defaultProps = {
  data: {},
  height: 600,
  marginX: 50,
  marginY: 100,
  width: 800
};
exports.default = OrderBookChart;