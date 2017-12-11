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
    let bug = this.state.bugs[pos-1]
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
              <span className="tag is-info">{bug.severity}</span>
              <p>Assigned To: {bug.assignedTo}</p>
            </div>
            <small className="tag is-primary">{bug.status}</small>
          </div>
          <footer className="card-footer">
            <button className="is-warning card-footer-item" key={i+1} onClick={()=>this.close(i+1)}>close</button>
            <button className="card-footer-item" key={i} onClick={()=>this.remove(i)}>delete</button>
          </footer>
        </div>
          )
    })

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-fifth">
            <h1 className="title is-1"> Bug Tracker Hacktiv8</h1>
            <div className="hero is-medium" >
              <div className="hero-body" >
                <h2 className="title is-2">Add new Bug Report</h2>
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
                  <input onClick={this.handleClick} type="submit" value="Submit" />
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
