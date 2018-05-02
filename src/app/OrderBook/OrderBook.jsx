import React from 'react';
import PropTypes from 'prop-types';

import classes from './OrderBook.css';
import OrderBookTable from './OrderBookTable';

function OrderBook ({ data }) {
  return (
    <div className={classes.root}>
      <OrderBookTable className={classes.buyBook} data={data.buy} />
      <OrderBookTable className={classes.sellBook} data={data.sell} isAskOrderBook={true} />
    </div>
  );
}

OrderBook.propTypes = {
  data: PropTypes.shape({
    buy: PropTypes.array,
    sell: PropTypes.array,
  }),
};

OrderBook.defaultProps = {
  data: [],
};


export default OrderBook;
