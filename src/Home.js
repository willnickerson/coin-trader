import React, { Component } from 'react';
import { redirectUrl } from './api';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = {
    userToken: null
  }

  // login = () => {
  //   debugger;
  //   login().then(data => {
  //     debugger;
  //   })
  // }
  render() {
    return (
      <div>
        <a href={redirectUrl}> Login with coinbase </a>
      </div>
    );
  }
}

export default Home;