import React, { Component } from 'react';
import { getToken, getUserData, redirectUrl } from '../api';
import qs from 'query-string';

class AuthSuccess extends Component {
  state = {
    authorizing: true,
    success: false,
  };

  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    if(query.code) {
      getToken(query.code)
        .then(data => {
          localStorage.setItem('AUTH_TOKEN', data.access_token);
          this.setState({
            authorizing: false,
            success: true
          });
          this.props.history.push('/')
        })
        .catch(err => {
          this.setState({authorizing: false});
          console.log(err.message);
        });
    }
  }
  
  render() {
    return (
      <div>
        {this.state.authorizing && <div>Authorizing...</div>}
        {!this.state.authorizing && this.state.success && <div>Success!</div>}
        {!this.state.authorizing && !this.state.success && <div>Oooops something went wrong :(<a href={redirectUrl}>try again?</a></div>}
      </div>
    );
  }
}

export default AuthSuccess;