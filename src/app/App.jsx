import React, { Component } from 'react';
import { Provider } from 'react-redux'

import HomePage from './HomePage';
import store from './store'
import { markethistory, orderbook } from './store/actions'
import classes from './App.css';

store.dispatch(markethistory.get());
store.dispatch(orderbook.get());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}
