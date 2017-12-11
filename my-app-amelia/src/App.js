import React, { Component } from 'react';
import './App.css';
import FormInput from './FormInput'
import Header from './Header'
import Footer from './Footer'
import CardPost from './CardPost'

class App extends Component {
  componentWillMount() {
    let bugs = localStorage.getItem('bugs')
    this.setState({
      bugs: JSON.parse(bugs)
    })
  }

  constructor() {
    super()
    this.state = {
      bugs: []
    }
  }

  setBug(newBug) {
    this.state.bugs.push(newBug)
    this.setState(this.state.bugs)
  }
  changeStatus(id) {
    let indexBug = this.state.bugs.findIndex((bug) => id === bug.id)
    // console.log(this.state.bugs[indexBug].status)
    this.state.bugs[indexBug].status = "Close"
    this.setState(this.state.bugs)
    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
  }
  deleteBug(id) {
    let indexBug = this.state.bugs.findIndex((bug) => id === bug.id)
    this.setState(this.state.bugs.splice(indexBug, 1))
    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
  }
  render() {

    return (

      <div className="App">
        <div className="container">
          <Header />
          <FormInput setBug={this.setBug.bind(this)} />
          <hr />
          {this.state.bugs.map((bug, index) => {
            return <CardPost key={index} bug={bug} deleteBug={this.deleteBug.bind(this)} changeStatus={this.changeStatus.bind(this)} />
          })}
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;


