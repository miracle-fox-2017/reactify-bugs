import React, { Component } from 'react';

class BugsList extends Component {
  closeBug = (event) => {
    let listBugs = this.props.listBugsFromParent
    let bugId = event.target.name
    listBugs.forEach((data) => {
      if (data.id === bugId) {
        data.status = 'close'
      }
    })
    localStorage.setItem('bugs', JSON.stringify(listBugs))
    this.forceUpdate()
  }
  removeBug = (event) => {
    let listBugs = this.props.listBugsFromParent
    let bugId = event.target.name
    listBugs.forEach((data) => {
      if (data.id === bugId) {
        let idx = listBugs.indexOf(data)
        listBugs.splice(idx, 1)
      }
    })
    localStorage.setItem('bugs', JSON.stringify(listBugs))
    this.forceUpdate()
  }
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
            <button name={data.id} type="button" className="btn btn-success" onClick={this.closeBug}>Close</button>
            <button name={data.id} type="button" className="btn btn-danger" onClick={this.removeBug}>Delete</button>
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
