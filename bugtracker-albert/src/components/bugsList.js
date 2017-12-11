import React, { Component } from 'react';

class BugsList extends Component {
  render () {
    let listBugs = this.props.listBugsFromParent
    let listBreakdown = listBugs.map((data) => {
      return (
        <div className="bugsIterator">
          <div className="card-header">
            Bug ID: {data.id}
          </div>
          <div className="card-body">
            <h4 className="card-title">Description: {data.description}</h4>
            <p className="card-text">Status: {data.status}</p>
            <button type="button" className="btn btn-success">Close</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      )
    })
    return (
      <div className="card">
        {listBreakdown}
      </div>
    )
  }
}

export default BugsList
