import React, { Component } from 'react';
import Chance from 'chance'

class InputForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      assign: '',
      severity: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    var chance = new Chance()
    let objInput = {
      id: chance.guid(),
      description: this.state.description,
      severity: this.state.severity,
      assign: this.state.assign,
      status: 'Open'
    }

    if(!localStorage.getItem('reactForm')) {
      let arrInput = [objInput]
      localStorage.setItem('reactForm', JSON.stringify(arrInput))
    } else {
      let arrInput = JSON.parse(localStorage.getItem('reactForm'))
      arrInput.push(objInput)
      localStorage.setItem('reactForm', JSON.stringify(arrInput))
    }

    this.props.insertBug(objInput)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add New Bug Report:</h3>
        <br/>
        <label>Description</label><br/>
        <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} /><br/>
        
        <label>Severity</label><br/>
        <select name="severity" value={this.state.severity} onChange={this.handleInputChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br/>

        <label>Assigned To</label><br/>
        <input type="text" name="assign" value={this.state.assign} onChange={this.handleInputChange} /><br/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default InputForm