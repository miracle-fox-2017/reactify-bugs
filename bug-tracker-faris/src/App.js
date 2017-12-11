import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      severity: '',
      assignedTo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(this.state)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1 className="title is-1"> Bug Tracker </h1>
        Add new Bug Report
        <form onSubmit={this.handleSubmit}>
          <label>
            Description:
          </label>
          <div>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="describe a bug.."/>
          </div>
          <label>
            Severity:
          </label>
          <div>
            <select id="severity" name="severity" value={this.state.severity} onChange={this.handleChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <label>
            Description:
          </label>
          <div>
            <input type="text" name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} placeholder="enter responsible.."/>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}



export default App;
