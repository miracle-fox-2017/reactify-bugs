import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state={
      name: 'siapa',
      tampungan: [],
      description: '',
      severity: '',
      assignedTo: ''
    }
  }

  render() {
    const {state} = this;
    return (
      <div className="App container">

      <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>

      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form onSubmit={this.submitPerubahan.bind({description: state.description, severity: state.severity, assignedTo: state.assignedTo})}>
            <label className="label" htmlFor="">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" value={state.description} onChange={ e => this.setState({description: e.target.value})}placeholder="Describe a bug..."></input>
            </p>
            <label className="label" htmlFor="">Severity</label>

            <p className="control">
              <span className="select">
              <select id="severity" name="severity" value={state.severity} onChange={e => this.setState({severity: e.target.value})}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              </span>
            </p>

            <label className="label" htmlFor="">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." value={state.assignedTo} onChange={e => this.setState({assignedTo: e.target.value})}></input>
            </p>

            <div className="control is-grouped">
              <p className="control">
                <button type="submit" className="button is-warning">Submit</button>
              </p>
            </div>

          </form>
          <p>{this.state.tampungan}</p>
        </div>
      </section>

      <hr />

      <div className="columns">
      <div className="column is-medium" id="listBugs"></div>
      </div>

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


  submitPerubahan(description,severity,assignedTo){
    let data = {
      description: description,
      severity: severity,
      assignedTo: assignedTo
    }
    this.setState.tampungan.push(data)
  }
}

export default App;