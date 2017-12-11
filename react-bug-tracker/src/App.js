import React, { Component } from 'react';
import Form from './Form'
import Buglist from './Buglist'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <h1 class="title is-1">Bug Tracker by HACKTIV8</h1>
          <Form/>
          <br/>
          <Buglist/>
        </div>
      </div>
    );
  }
}

export default App;
