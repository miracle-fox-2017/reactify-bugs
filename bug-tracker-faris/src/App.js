import React, { Component } from 'react';
import Chance from 'chance'
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
    this.handleClick = this.handleClick.bind(this);
    this.remove = this.remove.bind(this);
    this.close = this.close.bind(this);
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
    event.preventDefault();
  }

  handleClick(event) {
    var my_chance = new Chance();
    let bugs = {
      id: my_chance.guid(),
      description: this.state.description,
      severity: this.state.severity,
      assignedTo: this.state.assignedTo,
      status: 'open'
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
    if (bugs) {
      this.setState({
        bugs: bugs
      });
    }
  }

  remove(pos) {
    this.state.bugs.splice(pos,1)
    this.setState({
      bugs: this.state.bugs
    });
    localStorage.setItem('bugs', JSON.stringify(this.state.bugs));
  }

  close(pos) {
    let bug = this.state.bugs[pos]
    bug.status = 'close'
    this.setState({
      bugs: this.state.bugs
    });
    localStorage.setItem('bugs', JSON.stringify(this.state.bugs));
  }

  render() {
    let buglist = this.state.bugs.map((bug, i) => {
      return (
        <div className="card" key={i}>
          <header className="card-header">
            <p className="card-header-title">
            BugId: {bug.id}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {bug.description}
              <span className="tag is-info"> {bug.severity}</span>
              <p>Assigned To: {bug.assignedTo}</p>
            </div>
            <small className="tag is-primary">{bug.status}</small>
          </div>
          <footer className="card-footer">
            <a className="is-warning card-footer-item" onClick={()=>this.close(i)}>close</a>
            <a className="card-footer-item" onClick={()=>this.remove(i)}>delete</a>
          </footer>
        </div>
      )
    })

    let style = {
      background: {
        'backgroundColor': 'lightgray'
      }
    }

    return (
      <div className="container-fluid ">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="title is-1"> Bug Tracker Hacktiv8</h1>
            <div className="hero is-medium" style={style.background}>
              <div className="hero-body" >
                <h2 className="title is-3">Add new Bug Report</h2>
                <label className="label">
                  Description:
                </label>
                <div className="control">
                  <input className="input" type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="describe a bug.."/>
                </div>
                <div className="control">
                <label className="label">
                  Severity:
                </label>
                  <select className="select" id="severity" name="severity" value={this.state.severity} onChange={this.handleChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="control">
                <label className="label">
                  Assigned To:
                </label>
                  <input className="input" type="text" name="assignedTo" value={this.state.assignedTo} onChange={this.handleChange} placeholder="enter responsible.."/>
                </div>
                <div className="control is-grouped">
                  <p className="control">
                    <input className="button is-warning" onClick={this.handleClick} type="submit" value="Submit" />
                  </p>
                </div>
              </div>
            </div>
            <div className="buglist">
              { buglist }
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
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
