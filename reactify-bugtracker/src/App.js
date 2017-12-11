import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Bug from './Bug'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      bugs: [],
      description: '',
      severity: 'low',
      assignedTo: '',
      status: 'open'
    }
  }
  
  componentWillMount() {
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    // console.log('bugs',JSON.parse(bugs))
    this.setState({
      bugs: bugs
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Bug Tracker by HACKTIV8</h1>
        
        <h2>Add New Bug Report:</h2>
        <label className="label">Description :</label>
        <input type="text" placeholder="Describe a bug..." value={this.state.description} onChange={e => this.updateDescription(e)}></input>
        <label className="label">Severity:</label>
        <select name="severity" value={this.state.severity} onChange={e => this.updateSeverity(e)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label className="label">Assigned To:</label>
        <input type="text" value={this.state.assignedTo} placeholder="Enter responsible..." onChange={e => this.updateResponsible(e)}></input>
        <button onClick={this.saveBug.bind(this)}>Submit</button>
        
        <div>
          {this.state.bugs.map((bug, index) => {
            return (
              <Bug key={index} description = {bug.description} index={index} severity = {bug.severity} assignedTo = {bug.assignedTo} status = {bug.status} setClosed={this.setClosed.bind(this)} onClick={this.deleteBug.bind(this)}></Bug>
            )
          })}
        </div>
      </div>
    );
  }
  
  setClosed(index) {
    let newBugArr = this.state.bugs
    newBugArr[index].status = 'closed'
    this.setState({
      bugs:newBugArr
    })
    localStorage.setItem('bugs', JSON.stringify(newBugArr))
  }
  
  deleteBug(index) {
    let newBugArr = this.state.bugs
    newBugArr.splice(index,1)
    this.setState({
      bugs:newBugArr
    })
    localStorage.setItem('bugs', JSON.stringify(newBugArr))
  }
  
  saveBug(){
    let newBugArr = this.state.bugs
    let newBugObj = {
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
      status: this.state.status
    }
    newBugArr.push(newBugObj)
    this.setState({
      bugs:newBugArr,
      description: '',
      severity: 'low',
      assignedTo: ''
    })
    // this.setState((bugs, newBugArr) => newBugArr)
    localStorage.setItem('bugs', JSON.stringify(newBugArr))
  }
  
  updateDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  
  updateSeverity(e) {
    this.setState({
      severity: e.target.value
    })
  }
  
  updateResponsible(e) {
    this.setState({
      assignedTo: e.target.value
    })
  }
}
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

// const style = {
//
// }

export default App;
