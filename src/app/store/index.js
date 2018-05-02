import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const initialState = {
};

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
);

export default store;
