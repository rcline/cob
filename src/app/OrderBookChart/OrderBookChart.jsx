import React, { Component } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import classes from './OrderBookChart.css';

class OrderBookChart extends Component {
  static propTypes = {
    data: PropTypes.object,
    height: PropTypes.number,
    marginX: PropTypes.number,
    marginY: PropTypes.number,
    width: PropTypes.number,
  };

  static defaultProps = {
    data: {},
    height: 600,
    marginX: 50,
    marginY: 100,
    width: 800,
  };

  getAxisMinMaxValues(data) {
    let xmax = 0;
    let xmin = Infinity;
    let ymax = 0;
    let ymin = Infinity;

    data.forEach((item) => {
      xmax = item.rate > xmax ? item.rate : xmax;
      xmin = item.rate < xmin ? item.rate : xmin;
      ymax = item.sum > ymax ? item.sum : ymax;
      ymin = item.sum < ymin ? item.sum : ymin;
    });

    return {
      x: {
        max: xmax,
        min: xmin,
      },
      y: {
        max: ymax,
        min: ymin,
      },
    }
  }
  
  getChartPoints(data, minMaxValues, width, height, offsetX, offsetY) {
    return data.map((order, i) => {
      const normalizeX = (order.rate - minMaxValues.x.min) / (minMaxValues.x.max - minMaxValues.x.min);
      const scaleX = width - offsetY;
      const normalizeY = (order.sum - minMaxValues.y.min) / (minMaxValues.y.max - minMaxValues.y.min);
      const scaleY = height - offsetX;
      const x = normalizeX * scaleX + offsetY;
      const y = height - offsetX - normalizeY * scaleY;

      if (i === 0) {
        return `M${x},${y}`;
      } else {
        return `L${x},${y}`;
      }
    }).join(' ')
  }

  render() {
    const {
      data,
      height,
      marginX,
      marginY,
      width,
    } = this.props;

    const bittrex = data && data.bittrex;
    const poloniex = data && data.poloniex;

    if (!bittrex || !poloniex) {
      return null;
    }

    const minMaxValues = this.getAxisMinMaxValues(
      []
        .concat(bittrex.buy)
        .concat(bittrex.sell)
        .concat(poloniex.buy)
        .concat(poloniex.sell)
    );
    const {
      x: {
        max: xmax,
        min: xmin,
      },
      y: {
        max: ymax,
        min: ymin,
      },
    } = minMaxValues;

    return (
      <svg
        ref={el => this.elSvg = el}
        className={classes.root}
        width={width}
        height={height}
      >
        <title>Layered orderbook chart</title>
        <g className={classes.grid}>
          <line x1={marginY} x2={marginY} y1={0} y2={height - marginX} />
        </g>
        <g className={classes.grid}>
          <line x1={marginY} x2={width} y1={height - marginX} y2={height - marginX} />
        </g>
        <g className={c(classes.labels, classes.labelsX)}>
          <text x={marginY} y={height - marginX / 2}>{xmin}</text>
          <text x={width - 50} y={height - marginX / 2}>{xmax}</text>
        </g>
        <g className={c(classes.labels, classes.labelsY)}>
          <text x={marginY - 10} y={height - marginX}>0</text>
          <text x={marginY - 10} y={20}>{parseInt(ymax)}</text>
        </g>
        <path
          className={c(classes.data, classes.bittrex, classes.buy)}
          d={this.getChartPoints(bittrex.buy, minMaxValues, width, height, marginX, marginY)}
        />
        <path
          className={c(classes.data, classes.bittrex, classes.sell)}
          d={this.getChartPoints(bittrex.sell, minMaxValues, width, height, marginX, marginY)}
        />
        <path
          className={c(classes.data, classes.poloniex, classes.buy)}
          d={this.getChartPoints(poloniex.buy, minMaxValues, width, height, marginX, marginY)}
        />
        <path
          className={c(classes.data, classes.poloniex, classes.sell)}
          d={this.getChartPoints(poloniex.sell, minMaxValues, width, height, marginX, marginY)}
        />
      </svg>
    );
  }
}


export default OrderBookChart;
