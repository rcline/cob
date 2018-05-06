import React, { Component } from 'react';
import PropTypes from 'prop-types';

import paginator from '../../paginator';
import classes from './OrderBookTable.css';

const BOOK_TYPES = {
  BID: [
    { text: 'Sum', method: 'getSum' },
    { text: 'Total', method: 'getTotal' },
    { text: 'Size', method: 'getSize' },
    { text: 'Bid', method: 'getRate', classes: classes.bid },
  ],
  ASK: [
    { text: 'Ask', method: 'getRate', classes: classes.ask },
    { text: 'Size', method: 'getSize' },
    { text: 'Total', method: 'getTotal' },
    { text: 'Sum', method: 'getSum' },
  ],
};

class OrderBookTable extends Component {

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        rate: PropTypes.number,
        amount: PropTypes.number,
        exchange: PropTypes.string,
      }),
    ),
    isAskOrderBook: PropTypes.bool,
    overlapAmount: PropTypes.number,
    PaginateComponent: PropTypes.node.isRequired,
  };

  static defaultProps = {
    className: '',
    data: [],
    overlapAmount: null,
    isAskOrderBook: false,
  };

  getTotal(item) {
    return item.amount * item.rate;
  }

  getSize(item) {
    return item.amount;
  }

  getRate(item) {
    return item.rate;
  }

  render() {
    const {
      className,
      data,
      isAskOrderBook,
      overlapAmount,
      PaginateComponent,
    } = this.props;
    let sum = 0;
    const BOOK = isAskOrderBook ? BOOK_TYPES.ASK : BOOK_TYPES.BID;

    this.getSum = () => {
      return sum;
    };
    return (
      <div className={className}>
        <table className={classes.table}>
          <thead>
          <tr>
            {BOOK.map((col, i) =>
              <th key={i}>{col.text}</th>
            )}
          </tr>
          </thead>
          <tbody>
          {data && data.length > 0 && data.map((item, i) => {
            sum += this.getTotal(item);
            const hasOverlap =
              (!!overlapAmount && isAskOrderBook && this.getRate(item) <= overlapAmount) ||
              (!!overlapAmount && !isAskOrderBook && this.getRate(item) >= overlapAmount);

            return (
              <tr className={hasOverlap ? classes.overlap : ''} key={i}>
                {BOOK.map((col, i) =>
                  <td key={i} className={col.classes}>{this[col.method](item).toFixed(8)}</td>
                )}
              </tr>
            );
          })}
          </tbody>
        </table>
        {PaginateComponent}
      </div>
    );
  }
}


export default paginator(OrderBookTable);
