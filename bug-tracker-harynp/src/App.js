import React, { Component } from 'react';
import Form from './Form'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <Footer/>
      </div>
    );
  }
}

export default App;
