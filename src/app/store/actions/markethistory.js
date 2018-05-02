import fetch from 'isomorphic-fetch';
import {
  MARKET_HISTORY_GET,
} from '../actionEnums';


export function get() {
  return (dispatch) => {
    fetch('/api/markethistory')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return dispatch({
          type: MARKET_HISTORY_GET,
          data,
        });
      });

  };
}

export default {
  get,
}
