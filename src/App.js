import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/AuthSuccess'
import About from './components/About';
import Account from './components/Account';
import Trade from './components/Trade';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Coin Trader</h2>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/trade'>Trade</NavLink>
            <NavLink to='/account'>Account</NavLink>
            <NavLink to='/about'>About</NavLink>          
          </nav>
        </div>

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/auth' component={Auth}/>
          <Route path='/trade' component={Trade}/>
          <Route path='/account' component={Account}/>
          <Route path='/about' component={About}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    );
  }
}

export default App;
