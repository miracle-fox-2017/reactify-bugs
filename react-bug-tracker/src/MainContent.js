import React, { Component } from 'react'

class MainContent extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      bugs: [],
      description: '',
      severity: 'low',
      assignedTo: '',
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSeverityChange = this.handleSeverityChange.bind(this)
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this)
    this.doSaveBug = this.doSaveBug.bind(this)
  }

  doSaveBug(e) {
    e.preventDefault()
    // alert(this.state.description)
    var newBugs = this.state.bugs;
    newBugs.push({
      id: Math.random(),
      description: this.state.description,
      severity: this.state.description,
      assignedTo: this.state.assignedTo,
    })

    this.setState({
      bugs : newBugs,
      description: '',
      severity: '',
      assignedTo: '',
    })
  
    document.getElementById("bugInputForm").reset();
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
      </section>
    )
  }
}

export default MainContent;