import React, { Component } from 'react';
import Form from './Form'
import Footer from './Footer'
import Result from './Result'
import './App.css';

class App extends Component {
  componentWillMount() {
    var bugs = localStorage.getItem('bugs')
    this.setState({data: JSON.parse(bugs)})
  }

  constructor () {
    super ()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <Form/>
        {this.state.data.map((d) => {
          return <Result bugs={d}/>
        })}
        <Footer/>
      </div>
    );
  }
}

export default App;
