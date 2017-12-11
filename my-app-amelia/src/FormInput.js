import React, { Component } from 'react';
import './App.css';
import Chance from 'chance'

class FormInput extends Component {
  constructor (){
    super()
    this.addBugs = this.addBugs.bind(this)
    this.state = {
      datas : []
    }
  }

  addBugs(event){
    var chance = new Chance()
    event.preventDefault()
    let id = chance.guid()
    let description = this.refs.description.value
    let severity = this.refs.severity.value
    let assignedTo = this.refs.assignedTo.value
    let status = 'Open'

    let data = {
      id,
      description,
      severity,
      assignedTo,
      status
    }
    let bugs = []
    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }
    bugs.push(data)
    localStorage.setItem('bugs', JSON.stringify(bugs))

    this.props.setBug(data)
    this.refs.description.value = ''
    this.refs.assignedTo.value = ''

    // window.location.reload()
  }

  render() {
    return (
      <div className="FormInput">
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <label className="label">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" ref="description" placeholder="Describe a bug..." />
            </p>
            <label className="label">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity" ref="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" ref="assignedTo" placeholder="Enter responsible..." />
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning" onClick={this.addBugs}>Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
      </div>
    );
  }
}

export default FormInput
