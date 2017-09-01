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
      })
  }
  
  render() {
    return (
      <div>
        Account
        {this.props.user.name}
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