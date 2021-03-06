import React, { Component } from 'react';
import Header from '../Header';
import Layout from '../Layout';
import MarketHistory from '../MarketHistory';
import OrderBook from '../OrderBook';
import OrderBookChart from '../OrderBookChart';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <h2 style={{ display: 'none' }}>Candlestick Chart</h2>
          <h2>Order Book Chart</h2>
          <OrderBookChart />
          <h2>Combined Order Book</h2>
          <OrderBook />
          <h2>Combined Market History</h2>
          <MarketHistory />
        </Layout>
      </div>
    );
  }
}
