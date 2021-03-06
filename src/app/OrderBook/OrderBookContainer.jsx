import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderBook from './OrderBook';


function mapStateToProps(state) {
  return {
    data: state.orderbook.combined,
  };
}


export default connect(
  mapStateToProps,
)(OrderBook);
