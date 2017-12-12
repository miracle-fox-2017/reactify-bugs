import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bug Tracker by HACKTIV8</h1>
        </header>

        <MainContent/> 
      </div>
    );
  }
}

export default App;
