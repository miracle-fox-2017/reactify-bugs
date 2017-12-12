import React, { Component } from 'react'
import BugList from './BugList';
import Chance from 'chance';
var chance = new Chance();

class MainContent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      bugs: [],
      description: '',
      status: 'open',
      severity: 'low',
      assignedTo: '',
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSeverityChange = this.handleSeverityChange.bind(this)
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this)
    this.doSaveBug = this.doSaveBug.bind(this)
    this.doDeleteBug = this.doDeleteBug.bind(this)
    this.doCloseBug = this.doCloseBug.bind(this)
  }

  deleteBug = (id) => {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })

    this.setState({
      bugs: remainingBugs
    })

    localStorage.setItem('bugs', JSON.stringify(remainingBugs))
  }

  setStatusClosed = (id) => {
    let bugs = JSON.parse(localStorage.getItem('bugs'))

    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })

    this.setState({
      bugs: updatedBugs
    })


    localStorage.setItem('bugs', JSON.stringify(updatedBugs))

  }

  doSaveBug(e) {
    e.preventDefault()
    // alert(this.state.description)
    var newBugs = this.state.bugs;
    newBugs.push({
      id: chance.guid(),
      status: 'open',
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
    })

    this.setState({
      bugs : newBugs,
      description: '',
      severity: '',
      assignedTo: '',
    })

    localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
  
    document.getElementById("bugInputForm").reset();
  }

  doDeleteBug(payload, index) {
    // e.preventDefault()
    // console.log(payload)
    this.deleteBug(payload.id)
  }

  doCloseBug(payload, index) {
    this.setStatusClosed(payload.id)
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSeverityChange(e) {
    this.setState({ severity: e.target.value });
  }

  handleAssignedToChange(e) {
    this.setState({ assignedTo: e.target.value });
  }

  render () {
    var bugItem = []
    
    const bugItemStyle = {
      border: '1px solid #ddd',
      margin: '20px',
      padding: '10px',
      background: 'ghostwhite',
      
    };

    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>

          <form action="" id="bugInputForm">
            <label className="label" htmlFor="">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..." value={this.state.description} onChange={this.handleDescriptionChange} />
            </p>

            <label className="label" htmlFor="">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity" value={this.state.severity.value} onChange={this.handleSeverityChange}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>

            <label className="label" htmlFor="">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." value={this.state.assignedTo} onChange={this.handleAssignedToChange} />
            </p>

              <div className="control is-grouped">
                <p className="control">
                <button className="button is-warning" onClick={this.doSaveBug}>Submit</button>
                </p>
              </div>

          </form>
         
        </div>

        <div className="bug-list">
          <h2>Bug List</h2>
          <hr />

          {
            this.state.bugs.map((bug, index) => {
              return(
                <div className="bug-item" style={bugItemStyle} key={bug.id}>
                  <h4 className="bug-id">ID: {bug.id}</h4>
                  <h4 className="bug-id">Status: {bug.status}</h4>
                  <h2 className="bug-desc">Desc: {bug.description}</h2>
                  <h3 className="bug-severity">Severity: {bug.severity}</h3>
                  <h4 className="bug-assignedTo">Assigned To: {bug.assignedTo}</h4>

                  <button className="btn" onClick={() => this.doCloseBug(bug, index)}>Close</button>
                  <button className="btn" onClick={() => this.doDeleteBug(bug, index)}>Delete</button>
                </div>
              )
            })
          }
        </div>
        
      </section>
    )
  }

  componentWillMount(){
    this.setState({
      bugs: localStorage.getItem('bugs') !== null ? JSON.parse(localStorage.getItem('bugs')) : []
    })
  }
}

export default MainContent;