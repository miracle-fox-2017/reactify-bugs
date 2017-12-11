import React from 'react';
import './App.css';
class Form extends React.Component {
  addForm (event) {
    event.preventDefault();
    let description = this.refs.description.value;
    let severity = this.refs.severity.value;
    let assignedto = this.refs.assignedto.value;
    let form = {
      description,
      severity,
      assignedto
    }
    let data = this.state.data
    data.push(form)

    this.setState({
      data: data
    })

  }

  constructor () {
    super()
    this.addForm = this.addForm.bind(this)
    this.state = {
      data: [],
      creator: 'HACKTIV8'
    }
  }

  render () {
    let creator = this.state.creator;
    let data = this.state.data;
    return (
      <div className="container">
        <h1 className="title is-1"> Bug Tracker <small>by {creator}</small></h1>
        <section className="hero is-medium">
          <div className="hero-body">
            <h2 className="title">Add New Bug Report:</h2>
            <form action="" id="bugInputForm">
              <label className="label" htmlFor="">Description</label>
              <p className="control">
                <input className="input" type="text" id="description" ref="description" placeholder="Describe a bug..."/>
              </p>
              <label className="label" htmlFor="">Severity</label>
              <p className="control">
                <span className="select">
                  <select id="severity" name="severity" ref="severity">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </span>
              </p>
              <label className="label" htmlFor="">Assigned To</label>
              <p className="control">
                <input className="input" type="text" id="assignedTo" ref="assignedto" placeholder="Enter responsible..."/>
              </p>
              <div className="control is-grouped">
                <p className="control">
                  <button className="button is-warning" onClick={this.addForm}>Submit</button>
                </p>
              </div>
            </form>
            <pre>
            {JSON.stringify(data)}
            </pre>
          </div>
        </section>
        <hr />
        <div className="columns">
          <div className="column is-medium" id="listBugs"></div>
        </div>
      </div>
  )}
}

export default Form
