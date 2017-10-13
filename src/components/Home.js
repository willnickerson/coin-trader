import React, { Component } from 'react';
import { redirectUrl,  } from '../api';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = {
    authToken: null
  }

  componentDidMount() {
    const authToken = localStorage.getItem('AUTH_TOKEN');
    if(authToken) this.setState({ authToken });
  }


  logout = () => {
    localStorage.removeItem('AUTH_TOKEN');
    this.setState({ authToken: null})
  }

  render() {
    const { authToken } = this.state
    return (
      <div>
        {authToken ? 
          <div>
            <h1>welcome Will</h1> 
            <button onClick={this.logout}>logout</button>
          </div> : 
          <div>
              <p>Welcome to Cointrader</p><a href={redirectUrl}> Login with coinbase </a>
          </div>
        }
      </div>
    );
  }
}

export default Home;