import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BOOK_TYPES = {
  BID: [
    { text: 'Sum', method: 'getSum' },
    { text: 'Total', method: 'getTotal' },
    { text: 'Size', method: 'getSize' },
    { text: 'Bid', method: 'getRate' },
  ],
  ASK: [
    { text: 'Ask', method: 'getRate' },
    { text: 'Size', method: 'getSize' },
    { text: 'Total', method: 'getTotal' },
    { text: 'Sum', method: 'getSum' },
  ],
};

class OrderBookTable extends Component {
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
    } = this.props;
    let sum = 0;
    const BOOK = isAskOrderBook ? BOOK_TYPES.ASK : BOOK_TYPES.BID;

    this.getSum = () => {
      return sum;
    };

    return (
      <table className={className}>
        <thead>
          <tr>
            {BOOK.map((col) =>
              <th>{col.text}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 && data.map((item, i) => {
            sum += this.getTotal(item);
            return (
              <tr key={i}>
                {BOOK.map((col) =>
                  <td>{this[col.method](item)}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

OrderBookTable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      rate: PropTypes.number,
      amount: PropTypes.number,
      exchange: PropTypes.string,
    }),
  ),
  isAskOrderBook: PropTypes.bool,
};

OrderBookTable.defaultProps = {
  className: '',
  data: [],
  isAskOrderBook: false,
};


export default OrderBookTable;
