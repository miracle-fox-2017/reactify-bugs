import React, {Component} from 'react'

class Bug extends Component {
  
  render() {
    return (
      <div className="bugs">
        <span>Description:{this.props.description}</span>
        <span>Severity:{this.props.severity}</span>
        <span>Assigned To:{this.props.assignedTo}</span>
        <span>Status:{this.props.status}</span>
        <span><button onClick={this.setClosed.bind(this)}>Close</button></span>
        <span><button onClick={this.getComponent.bind(this)}>Delete</button></span>
      </div>
    )
  }
  
  setClosed() {
    this.props.setClosed(this.props.index)
  }
  
  getComponent() {
    this.props.onClick(this.props.index)
  }
  
}

export default Bug
