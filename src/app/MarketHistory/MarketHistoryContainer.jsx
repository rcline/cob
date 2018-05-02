import React, { Component } from 'react';
import { connect } from 'react-redux';

import MarketHistory from './MarketHistory';


function mapStateToProps(state) {
  return {
    data: state.markethistory,
  };
}


export default connect(
  mapStateToProps,
)(MarketHistory);
