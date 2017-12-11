import React, { Component } from 'react';
import logo from './logo.svg';


class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
        </header>
    );
  }
}

export default Header