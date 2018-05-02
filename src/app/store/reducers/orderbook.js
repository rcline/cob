import {
  ORDER_BOOK_GET,
} from '../actionEnums';

const INITIAL_STATE = {};

function orderbook(state = INITIAL_STATE, action) {
  let nextState = state;

  switch (action.type) {
    case ORDER_BOOK_GET:
      nextState = action.data;
      break;
    default:
      break;
  }

  return nextState;
}

export default orderbook;
