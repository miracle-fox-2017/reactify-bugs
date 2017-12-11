import React, { Component } from 'react';

class Timeline extends React.Component {

  constructor(props) {
    super(props)
  }

  deleteBug () {
    this.props.deleteBug(this.props.bug.id)
  }

  closeBug () {
    this.props.closeBug(this.props.bug.id)
  }

  render () {
    return (
      <div style={{border: '1px solid #ddd'}}>
        ID: <label>{this.props.bug.id}</label><br/>
        Description: <label>{this.props.bug.description}</label><br/>
        Severity: <label>{this.props.bug.severity}</label><br/>
        Assign:  <label>{this.props.bug.assign}</label><br/>
        Status: <label>{this.props.bug.status}</label><br/>
        <div>
          <button onClick={() => this.closeBug()}>Close</button>
          <button onClick={() => this.deleteBug()}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Timeline