import React from 'react'
import Chance from 'chance'

class Formbug extends React.Component{

  addBug(event) {
    var chance = new Chance()
    event.preventDefault();
    var bug = {
      id: chance.guid(),
      description: this.refs.description.value,
      severity: this.refs.severity.value,
      assignedTo: this.refs.assignedTo.value,
      status: 'open'
    }

    var bugs = []

    if (localStorage.getItem('bugs') !== null) {
      bugs = JSON.parse(localStorage.getItem('bugs'))
    }

    bugs.push(bug)
    localStorage.setItem('bugs', JSON.stringify(bugs))

    this.props.addBug(bug)
    this.refs.description.value = ''
    this.refs.severity.value = ''
    this.refs.assignedTo.value = ''
  }

  constructor() {
    super();
    this.addBug = this.addBug.bind(this);
    this.state = {
      jenisbugs: [],
      title: 'Kumpul bugs'
    }
  }

  render() {
    let title = this.state.title;
    return (
      <div>
      <h1>{title}</h1>
      <form>
      <label>Description</label>
      <p>
        <input type="text" id="description" placeholder="Describe a bug..." ref="description" />
      </p>
      <label>Severity</label>
      <p>
      <select id="severity" name="severity" ref="severity">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      </p>
      <label>Assigned To</label>
      <p>
        <input type="text" id="assignedTo" placeholder="Enter responsible..." ref="assignedTo"/>
      </p>
      <div>
        <p>
          <button onClick={this.addBug}>Submit</button>
        </p>
      </div>
      </form>
      </div>
    )
  }
}

export default Formbug
