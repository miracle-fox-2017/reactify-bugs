import React, { Component } from 'react';
import './App.css';
import Formbug from './Formbug'
import CardBug from './CardBug'

class App extends Component {
  componentWillMount() {
    var Jsonbugs = localStorage.getItem('bugs')
    this.setState({bugs: JSON.parse(Jsonbugs)})
  }

  constructor() {
    super()
    this.state = {
      bugs: []
    }
  }

  addBug = (id) => {
    this.state.bugs.push(id)
    this.setState(this.state.bugs)
  }

  deleteBug = (id) => {
    var index = this.state.bugs.findIndex((bug) => {
      return bug.id === id
    })

    this.setState(this.state.bugs.splice(index, 1))
    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
  }

  closeBug = (id) => {
    var index = this.state.bugs.findIndex((bug) => {
      return bug.id === id
    })
    this.state.bugs[index].status = 'close'
    this.setState(this.state.bugs)
    // this.setState(this.state.bugs[index].status = 'close')
    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
  }

  render() {
    return (
      <div className="App">
        <Formbug addBug = {this.addBug}/>
        {this.state.bugs.map((bug, index) => {
          return <CardBug key={index} bug = {bug} deleteBug = {this.deleteBug} closeBug = {this.closeBug}/>
        })}
      </div>
    );
  }
}

export default App;
