import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Paginate = ({
  className,
  onPageDown,
  onPageUp,
  page,
}) => (
  <div className={className}>
    <span>Page #{page}</span>&nbsp;
    <button onClick={onPageDown}>&lt;</button>
    <button onClick={onPageUp}>&gt;</button>
  </div>
);

Paginate.propTypes = {
  className: PropTypes.string,
  onPageDown: PropTypes.func,
  onPageUp: PropTypes.func,
  page: PropTypes.number,
};

Paginate.defaultProps = {
  className: '',
  onPageDown: () => {},
  onPageUp: () => {},
  page: 1,
};


export default Paginate;
