import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserData } from './api';
import { setUser } from './actions/user';


class Account extends Component {
  componentDidMount() {
    getUserData()
      .then(data => {
        const userData = data
        this.props.setUser(userData);
        console.log(this.props.user);
      })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome {this.props.user.name}</h2>
        <img src={this.props.user.avatar_url}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);