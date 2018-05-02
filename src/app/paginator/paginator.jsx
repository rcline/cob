import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paginate from './Paginate';


function paginator(PaginatedComponent) {
  return class Paginator extends Component {
    static propTypes = {
      data: PropTypes.array,
    };

    static defaultProps = {
      data: [],
    };

    state = {
      items: [],
      itemsPerPage: 10,
      page: 1,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      return {
        items: nextProps.data,
      };
    }

    onPageDown = () => {
      if (this.state.page <= 1) {
        return undefined;
      }

      this.setState({
        page: this.state.page - 1,
      });
    };

    onPageUp = () => {
      const {
        items,
        itemsPerPage,
        page,
      } = this.state;

      if (page >= Math.ceil(items.length / itemsPerPage)) {
        return undefined;
      }

      this.setState({
        page: page + 1,
      });
    };

    render() {
      const {
        items,
        itemsPerPage,
        page,
      } = this.state;
      const {
        data,
        ...rest,
      } = this.props;

      const displayedData = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

      return (
        <PaginatedComponent
          {...rest}
          data={displayedData}
          PaginateComponent={<Paginate page={page} onPageDown={this.onPageDown} onPageUp={this.onPageUp}/>}
        />
      );
    }
  };
}

export default paginator;
