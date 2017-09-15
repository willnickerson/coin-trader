import React, { Component } from 'react';
import { redirectUrl } from './api';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = {
    userToken: null
  }

  render() {
    return (
      <div>
        <p>Welcome to Cointrader</p>
        <a href={redirectUrl}> Login with coinbase </a>
      </div>
    );
  }
}

export default Home;