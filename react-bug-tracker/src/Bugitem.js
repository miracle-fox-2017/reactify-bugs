import React, { Component } from 'react';

class Bugitem extends Component {
  constructor(props) {
    super(props)
  }

  closeBug(bugId) {
    this.props.closeBug(bugId)
  }

  deleteBug(bugId) {
    this.props.deleteBug(bugId)
  }

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{this.props.bug.id}</p>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.bug.description}
            <br />
            <span className="tag is-info">{this.props.bug.severity}</span>
            <p>Assigned to: {this.props.bug.assigned}</p>
          </div>
          <span className="tag is-warning">{this.props.bug.status}</span>
        </div>
        <footer className="card-footer">
          <a className="card-footer-item" onClick={this.closeBug.bind(this, this.props.bug.id)}>Close</a>
          <a className="card-footer-item" onClick={this.deleteBug.bind(this, this.props.bug.id)}>Delete</a>
        </footer>
      </div>
    )
  }
}

export default Bugitem