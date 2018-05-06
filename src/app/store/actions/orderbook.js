import fetch from 'isomorphic-fetch';
import {
  ORDER_BOOK_GET,
} from '../actionEnums';


function addTotals(data) {
  let sum = 0;
  data.forEach((item) => {
    sum += item.amount;
    item.sum = sum;
  });
  return data;
}

export function get() {
  return (dispatch) => {
    fetch('/api/orderbook')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const exchanges = {};

        Object.keys(data.exchanges).forEach((key) => {
          exchanges[key] = {
            buy: addTotals(data.exchanges[key].buy),
            sell: addTotals(data.exchanges[key].sell),
          }
        });

        return dispatch({
          type: ORDER_BOOK_GET,
          data: {
            combined: {
              buy: addTotals(data.combined.buy),
              sell: addTotals(data.combined.sell),
            },
            exchanges,
          },
        });
      });

  };
}

export default {
  get,
}
