import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from './FormBug.js'
import CardBug from './CardBug.js'
var Chance = require('chance')
var chance = new Chance()

class App extends Component {
  constructor () {
    super()
    this.state = {
      bugs: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bug Tracker <small>by HACKTIV8</small></h1>
        </header>
        <FormInput bugs={this.sendDataParent.bind(this)}>
        </FormInput>
        <hr />
        {this.cardBugId.call(this)}
      </div>
    );
  }

  componentWillMount () {
    if (localStorage.allBugs) {
      const newBugs = JSON.parse(localStorage.allBugs)
      console.log('newBugs ', newBugs)
      this.setState({
        bugs: newBugs.allBugs
      })
    }
  }

  sendDataParent(val) {
    alert(JSON.stringify(val)+ ' dari depan')
    val.BugId = chance.guid()
    val.status = 'Open'
    this.setState({
      bugs: [...this.state.bugs, val]
    }, ()=> {
      localStorage.setItem('allBugs', JSON.stringify(this.state))
    })
  }

  cardBugId () {
    if (this.state.bugs.length > 0) {
      return <div className="md1-grid">
        {this.state.bugs.map((item, index) => {
          return <div className="md1-cell--4-col">
          <CardBug
            style={{align: 'center'}}
            onDelete={this.spliceState.bind(this)}
            onUpdate={this.updateBug.bind(this)}
            key={item.BugId}
            CardBugsProps={item}
            indexnya={index}>
          </CardBug>
        </div>
        })}
      </div>
    }
  }

  spliceState (index) {
    const allBugs = this.state.bugs
    this.setState({
      bugs: [...allBugs.slice(0, index), ...allBugs.slice(index + 1)]
    }, () => {
      localStorage.setItem('allBugs', JSON.stringify(this.state))
    })
  }

  updateBug (objval, index) {
    const allBugs = this.state.bugs
    allBugs[index].status = 'Close'
    this.setState({
      bugs: allBugs
    }, () => {
      localStorage.setItem('allBugs', JSON.stringify(this.state))
    })
  }
}

export default App;
