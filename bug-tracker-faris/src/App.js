import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs: [],
      description: '',
      severity: 'low',
      assignedTo: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let bugs = {
      id: new Date(),
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo
    };
    this.state.bugs.push(bugs);
    localStorage.setItem('bugs', JSON.stringify(this.state.bugs));
    this.setState({
      bugs: this.state.bugs
    });
    event.preventDefault();
  }

  componentWillMount(){
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    this.setState({
      bugs: bugs
    });
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
            Assigned To:
          </label>
          <div>
            <input type="text" name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} placeholder="enter responsible.."/>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <div className="buglist">
          { JSON.stringify(this.state.bugs) }
        </div>
      </div>
    );
  }
}



export default App;
