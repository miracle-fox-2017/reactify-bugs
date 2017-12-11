import React, { Component } from 'react'

class BugList extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    <div className="bug-list">
      <div className="bug-item">
        <h4 className="bug-id">Bug Id</h4> 
        <h3 className="bug-name">Error Laptop</h3>
        <h3 className="bug-severity">Low</h3>
        
        <button className="btn">Delete</button>
      </div>
    </div>
  }
}