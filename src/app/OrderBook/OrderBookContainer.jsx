import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import OrderBook from './OrderBook';

class OrderBookContainer extends Component {
  state = {
    orderbook: {},
  };

  setOrderbook = (orderbook) => {
    this.setState({ orderbook });
  };

  componentDidMount() {
    fetch('/api/orderbook')
      .then(function(response) {
        return response.json();
      })
      .then(this.setOrderbook);
  };

  render() {
    return (<OrderBook data={this.state.orderbook}/>);
  }
}

export default OrderBookContainer;

