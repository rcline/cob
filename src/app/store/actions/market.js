import {
  MARKET_UPDATE,
} from '../actionEnums';


export function updateMarket(data) {
  return (dispatch) => {
    dispatch({
      type: MARKET_UPDATE,
      data,
    });
  };
}

export default {
  updateMarket,
}
