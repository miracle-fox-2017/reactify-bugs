import React, { Component } from 'react';
import Form from './Form'
import Buglist from './Buglist'

class App extends Component {
  constructor() {
    super()
    this.state= {
      bugList: []
    }
  }

  componentDidMount() {
    this.setState({
      bugList: JSON.parse(localStorage.getItem('bugList'))
    })
  }

  closeBug(bugId) {
    let bugs = this.state.bugList
    let index = bugs.map(b => {return b.id}).indexOf(bugId)
    
    bugs[index].status = 'Close'

    localStorage.setItem('bugList', JSON.stringify(bugs))

    this.setState({
      bugList: bugs
    })
  }

  deleteBug(bugId) {
    let bugs = this.state.bugList
    let index = bugs.map(b => {return b.id}).indexOf(bugId)
    
    bugs.splice(index, 1)

    localStorage.setItem('bugList', JSON.stringify(bugs))

    this.setState({
      bugList: bugs
    })
  }

  newBug(bug) {
    let bugList = this.state.bugList
    bugList.push(bug)

    localStorage.setItem('bugList', JSON.stringify(bugList))
    this.componentDidMount()
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title is-1">Bug Tracker by HACKTIV8</h1>
          <Form newBug={this.newBug.bind(this)}/>
          <br/>
          <Buglist bugList={this.state.bugList} closeBug={this.closeBug.bind(this)} deleteBug={this.deleteBug.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
