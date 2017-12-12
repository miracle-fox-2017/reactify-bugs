import React, { Component } from 'react';
import Chance from 'chance'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      severity: 'Low',
      assigned: ''
    }
  }
  
  handleInput (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    let chance = new Chance()
    let bugList = []
    let formBug = {
      id: chance.guid(),
      description: this.state.description,
      severity: this.state.severity,
      assigned: this.state.assigned,
      status: 'Open'
    }

    if (localStorage.getItem('bugList')) {
      bugList = JSON.parse(localStorage.getItem('bugList'))
    }
    bugList.push(formBug)
    localStorage.setItem('bugList', JSON.stringify(bugList))
    
    this.props.newBug(formBug)

    this.setState({
      description: '',
      severity: 'Low',
      assigned: ''
    })
  }

  render() {
    return (
      <section className="hero">
        <div className="hero is-medium">
          <h2 className="title">Add New Bug Report:</h2>
        </div>
          <div className="field">
            <label className="label">Description:</label>
            <input name="description" className="input" type="text" placeholder="Describe a bug..." value={this.state.description} onChange={this.handleInput.bind(this)}/>
          </div>
          <div className="field">
            <label className="label">Severity:</label>
            <div className="control">
              <div className="select">
                <select name="severity" value={this.state.severity} onChange={this.handleInput.bind(this)}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Assigned To:</label>
            <input name="assigned" className="input" type="text" placeholder="Enter responsible..." value={this.state.assigned} onChange={this.handleInput.bind(this)}/>
          </div>
          <button className="button is-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </section>
    )
  }

}

export default Form;