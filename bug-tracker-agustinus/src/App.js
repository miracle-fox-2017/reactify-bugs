import React, { Component } from 'react';
import { 
  Control,
  Input
  } from 'reactbulma'
import './App.css';
import Chance from 'chance'
const chance = new Chance()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: chance.guid(),
      description: '',
      assignedTo: '',
      severity: '',
      status: 'Open'

    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(function(state) {
      // state.push(state)
      console.log('ini state', state);
      localStorage.setItem('bugs', JSON.stringify(state))
    })
  }

  render() {
    return (
      <div className="App" className="container">
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <section className="hero is-medium">
            <div className="hero-body">
              <h2 className="title">Add New Bug Report:</h2>
              <form onSubmit={this.handleSubmit}>
                <label className="label" >Description</label>
                <Control>
                  <Input name="description" value={this.state.description} onChange={this.handleChange} placeholder="Describe a bug..."/>
                </Control>
                <label className="label" >Severity</label>
                <p className="control">
                  <span className="select">
                    <select name="severity" value={this.state.severity} onChange={this.handleChange}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </span>
                </p>
                <label className="label" >Assigned To</label>
                <Control>
                  <Input name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} placeholder="Enter responsible..."/>
                </Control>
                <div className="control is-grouped">
                  <p className="control">
                    <button className="button is-warning">Submit</button>
                  </p>
                </div>
              </form>
            </div>
          </section>
          <hr />
          <div className="columns">
            <div className="column is-medium" id="listBugs"></div>
          </div>
          {/* <!-- Footer --> */}
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  &copy; HACKTIV8
                </p>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

export default App;
