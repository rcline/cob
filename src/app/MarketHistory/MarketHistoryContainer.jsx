import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import MarketHistory from './MarketHistory';

class MarketHistoryContainer extends Component {
  state = {
    history: [],
  };

  setHistory = (history) => {
    this.setState({ history });
  };

  componentDidMount() {
    fetch('/api/markethistory')
      .then(function(response) {
        return response.json();
      })
      .then(this.setHistory);
  };

  render() {
    return (<MarketHistory data={this.state.history}/>);
  }
}

export default MarketHistoryContainer;

