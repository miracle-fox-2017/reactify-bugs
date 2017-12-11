import React, { Component } from 'react';
import { 
  Control,
  Input
  } from 'reactbulma'
import './App.css';
import ListBugs from './listBugs'
import Chance from 'chance'
const chance = new Chance()

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bugs:[],
      bug: {
        id: chance.guid(),
        description: '',
        assignedTo: '',
        severity: 'low',
        status: 'Open'
      }
    };
  }

  componentWillMount () {
    this.setState({
      bugs: JSON.parse(localStorage.getItem('bugs')) || []
    })
    this.forceUpdate();
  }

  handleChange = (event) => {
    let state = this.state.bug
    state[event.target.name]= event.target.value
    this.setState(state)
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(function(state) {
      console.log('INPUT DATA', state.bug)
      this.state.bugs.push(state.bug)
      localStorage.setItem('bugs', JSON.stringify(this.state.bugs))
    })
    this.setState({
      bug: {
        id: chance.guid(),
        description : '',
        severity : '',
        assignedTo : '',
        status: 'Open'
      }
    })
  }

  tutupBug (id) {
    console.log('INI ID', id)
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    let updatedBugs = bugs.map((item) => {
      if (item.id === id)
        item.status = 'Close'
      return item
    })
    localStorage.setItem('bugs', JSON.stringify(updatedBugs))
    window.location.reload()
  }

  hapusBug (id) {
    console.log('INI ID Yg KAN DI HAPUS', id)
    let bugs = JSON.parse(localStorage.getItem('bugs'))
    let remainingBugs = bugs.filter((item) => {
      return item.id !== id
    })
    localStorage.setItem('bugs', JSON.stringify(remainingBugs))
    window.location.reload()
  }

  render() {
    return (
      <div className="App container">
          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <section className="hero is-medium">
            <div className="hero-body">
              <h2 className="title">Add New Bug Report:</h2>
              <form onSubmit={this.handleSubmit}>
                <label className="label" >Description</label>
                <Control>
                  <Input name="description" value={this.state.bug.description} onChange={this.handleChange} placeholder="Describe a bug..."/>
                </Control>
                <label className="label" >Severity</label>
                <p className="control">
                  <span className="select">
                    <select name="severity" value={this.state.bug.severity} onChange={this.handleChange}>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </span>
                </p>
                <label className="label" >Assigned To</label>
                <Control>
                  <Input name="assignedTo" value={this.state.bug.assignedTo} onChange={this.handleChange} placeholder="Enter responsible..."/>
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
          <ListBugs 
            bugs={this.state.bugs}
            setClose={this.tutupBug}
            setHapus={this.hapusBug}
          />
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
