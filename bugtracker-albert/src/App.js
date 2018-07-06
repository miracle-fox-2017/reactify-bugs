import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/heading'
import Form from './components/form'
import BugsList from './components/bugsList'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      listBugsFromChild: null
    }
  }
  dataBugsFromChild = (fromChild) => {
    this.setState({
      listBugsFromChild: fromChild
    })
  }
  componentWillMount () {
    let initialBugs = JSON.parse(localStorage.getItem('bugs'))
    this.setState({
      listBugsFromChild: initialBugs
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Heading></Heading>
        </header>
        <p className="App-intro">
        </p>
        <div className="container">
          <Form sendDataBugsToParent={this.dataBugsFromChild}></Form>
        </div>
        <div className="container">
          <BugsList listBugsFromParent={this.state.listBugsFromChild}></BugsList>
        </div>
      </div>
    );
  }
}

export default App;
