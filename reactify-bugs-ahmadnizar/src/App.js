import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import FormInput from './Form'
import Timeline from './Timeline'

class App extends Component {

  constructor() {
    super()
    this.state = {
      bugsData: []
    }
  }
  insertBug = (data) => {
    this.setState(this.state.bugsData.push(data))
  }
  deleteBug = (id) => {
    let deletedIdx = this.state.bugsData.findIndex(element => {
      return element.id === id
    })

    this.setState(this.state.bugsData.splice(deletedIdx, 1))
    localStorage.setItem('reactForm', JSON.stringify(this.state.bugsData))
  }
  closeBug = (id) => {
    let updatedIdx = this.state.bugsData.findIndex(element => {
      return element.id === id
    })

    this.state.bugsData[updatedIdx].status =  'Close'
    this.setState(this.state.bugsData)
    localStorage.setItem('reactForm', JSON.stringify(this.state.bugsData))
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <FormInput insertBug={this.insertBug}/>
        {this.state.bugsData.map((bugItem, index) => {
          return <Timeline key = {index}  bug = {bugItem} deleteBug={this.deleteBug} closeBug={this.closeBug} />
        })}
      </div>
    );
  }
  componentWillMount() {
    this.setState({bugsData: JSON.parse(localStorage.getItem('reactForm'))})
  }
  componentDidMount() {
    // console.log(this.state.bugsData)
  }
}

export default App;
