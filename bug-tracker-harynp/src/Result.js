import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: {this.props.bugs.id}<br/>
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <span className="tag is-info"> Description: {this.props.bugs.description}</span><br/>
            <span className="tag is-info">Severity : {this.props.bugs.severity}</span><br/>
              <span className="tag is-info">Assigned : {this.props.bugs.assignedto}</span><br/>
          </div>
          <br/>
          <small className="tag is-primary">status</small>
        </div>
        <footer className="card-footer">
        <button> <a onclick="setStatusClosed('id')" className="is-warning card-footer-item">Close</a> </button>
        <button> <a className="card-footer-item" onClick="deleteBug('id')">Delete</a> </button>
        </footer>
      </div>
    )}
}
export default Result
