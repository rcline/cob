import {
  MARKET_UPDATE,
} from '../actionEnums';

const INITIAL_STATE = 'BTC-ETH';

function market(state = INITIAL_STATE, action) {
  let nextState = state;

  switch (action.type) {
    case MARKET_UPDATE:
      nextState = action.data;
      break;
    default:
      break;
  }

  return nextState;
}

export default market;
