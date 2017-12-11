import React, { Component } from 'react';
const Chance = require('chance')
const chance = new Chance()

class Form extends Component {
  constructor () {
    super ()
    this.state = {
      id: chance.guid(),
      description: '',
      severity: '',
      assignedTo: '',
      status: 'open'
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    let bugs = []
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(this.state)
    localStorage.setItem('bugs', JSON.stringify(bugs))
    let dataBugs = JSON.parse(localStorage.getItem('bugs'))
    this.props.sendDataBugsToParent(dataBugs)
  }
  render () {
    return (
      <div id="formInput">
        <form onSubmit={this.handleSubmit} id="formBugs">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Descriptions</label>
            <input name="description" type="text" className="form-control" value={this.state.description} onChange={this.handleChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Severity</label>
            <select name="severity" className="form-control" id="severityInput" value={this.state.severity} onChange={this.handleChange}>
              <option value=""></option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Assigned to:</label>
            <input name="assignedTo" type="text" className="form-control" id="assignedInput" value={this.state.assignedTo} onChange={this.handleChange}></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
