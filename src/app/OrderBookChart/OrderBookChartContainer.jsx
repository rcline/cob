import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderBookChart from './OrderBookChart';


function mapStateToProps(state) {
  return {
    data: state.orderbook.exchanges,
  };
}


export default connect(
  mapStateToProps,
)(OrderBookChart);
