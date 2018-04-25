import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import MarketHistory from '../MarketHistory';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <h2>Combined Order Book</h2>
          <h2>Combined Market History</h2>
          <MarketHistory />
        </Layout>
      </div>
    );
  }
}
