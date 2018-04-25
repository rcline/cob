import MarketHistory from './MarketHistory';
import { compose } from 'recompose';



var React = require('react');
var fetch = require('isomorphic-fetch');
import MarketHistory from './MarketHistory';

var UserListContainer = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    axios.get('/path/to/user-api').then(function(response) {
      _this.setState({users: response.data})
    });
  },

  render: function() {
    return (<UserList users={this.state.users} />);
  }
});

module.exports = UserListContainer;



export default compose(

)(MarketHistory);
