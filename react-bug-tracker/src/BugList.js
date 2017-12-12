import React, { Component } from 'react'

class BugList extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    var bugItem = []

    this.props.bugs.forEach(bug => {
      bugItem.push(
        <div className="bug-item" key={bug.id}>
          <h4 className="bug-id">{bug.id}</h4>
          <h2 className="bug-desc">{bug.description}</h2>
          <h3 className="bug-severity">{bug.severity}</h3>
          <h4 className="bug-assignedTo">{bug.assignedTo}</h4>

          <button className="btn">Delete</button>
        </div>
      )
    })

    return (
     <div className="bug-list">
       <h2>Bug List</h2>
       <hr/>

        {bugItem}
     </div>
    )
  }
}

export default BugList