import fetch from 'isomorphic-fetch';
import {
  ORDER_BOOK_GET,
} from '../actionEnums';


export function get() {
  return (dispatch) => {
    fetch('/api/orderbook')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return dispatch({
          type: ORDER_BOOK_GET,
          data,
        });
      });

  };
}

export default {
  get,
}
