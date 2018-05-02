import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import paginator from '../paginator';
import classes from './MarketHistory.css';

function MarketHistory ({ data, PaginateComponent }) {
  return (
    <div className={classes.root}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type (Buy/Sell)</th>
            <th>Price (Bid/Ask)</th>
            <th>Amount (units)</th>
            <th>Total (units)</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 && data.map((item) =>
            <tr key={item.id}>
              <td>{item.date}</td>
              <td className={c(classes.type, item.type === 'sell' ? classes.ask : classes.bid)}>{item.type}</td>
              <td>{item.rate.toFixed(8)}</td>
              <td>{item.amount.toFixed(8)}</td>
              <td>{item.total.toFixed(8)}</td>
            </tr>
          )}
        </tbody>
      </table>
      {PaginateComponent}
    </div>
  );
}

MarketHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.number,
      type: PropTypes.string,
      rate: PropTypes.number,
      amount: PropTypes.number,
      total: PropTypes.number,
      exchange: PropTypes.string,
    })
  ),
  PaginateComponent: PropTypes.node.isRequired,
};

MarketHistory.defaultProps = {
  data: [],
};


export default paginator(MarketHistory);
