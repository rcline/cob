import React from 'react';
import PropTypes from 'prop-types';

function MarketHistory ({ data }) {
  return (
    <div>
      <table>
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
              <td>{item.type}</td>
              <td>{item.rate}</td>
              <td>{item.amount}</td>
              <td>{item.total}</td>
            </tr>
          )}
        </tbody>
      </table>
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
};

MarketHistory.defaultProps = {
  data: [],
};


export default MarketHistory;
