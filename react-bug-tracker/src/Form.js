import React, { Component } from 'react';
import Chance from 'chance'
import '../node_modules/bulma/css/bulma.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      description: '',
      severity: '',
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
    let formBug = {
      id: chance.guid(),
      description: this.state.description,
      severity: this.state.severity,
      assigned: this.state.assigned,
      status: 'Open'
    }

    if (localStorage.getItem('bugList')) {
      let bugList = JSON.parse(localStorage.getItem('bugList'))
      bugList.push(formBug)
      localStorage.setItem('bugList', JSON.stringify(bugList))
    } else {
      localStorage.setItem('bugList', JSON.stringify([formBug]))
    } 
  }

  render() {
    return (
      <section className="hero">
        <div className="hero is-medium">
          <h2 className="title">Add New Bug Report:</h2>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">Description:</label>
            <input name="description" className="input" type="text" placeholder="Describe a bug..." onChange={this.handleInput.bind(this)}/>
          </div>
          <div className="field">
            <label className="label">Severity:</label>
            <div className="control">
              <div className="select">
                <select name="severity" onChange={this.handleInput.bind(this)}>
                  <option>-select-</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Assigned To:</label>
            <input name="assigned" className="input" type="text" placeholder="Enter responsible..." onChange={this.handleInput.bind(this)}/>
          </div>
          <input type="submit" className="button is-primary" value="Submit" />
        </form>
      </section>
    )
  }

}

export default Form;