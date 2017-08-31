import React, { Component } from 'react';
import { getToken } from './api';
import qs from 'query-string';

class AuthSuccess extends Component {
  state = {
    token: null
  };

  componentDidMount() {
    const query = qs.parse(this.props.location.search);
    debugger;
    if(query.code) {
      getToken(query.code)
        .then(data => {
          debugger;
        })
    }
  }
  
  render() {
    return (
      <div>
        Success!
      </div>
    );
  }
}

export default AuthSuccess;