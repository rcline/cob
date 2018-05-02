import {
  MARKET_HISTORY_GET,
} from '../actionEnums';

const INITIAL_STATE = [];

function markethistory(state = INITIAL_STATE, action) {
  let nextState = state;

  switch (action.type) {
    case MARKET_HISTORY_GET:
      nextState = action.data;
      break;
    default:
      break;
  }

  return nextState;
}

export default markethistory;
