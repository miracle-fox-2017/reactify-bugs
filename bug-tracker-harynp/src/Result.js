import React from 'react';

class Result extends React.Component {
setRemoveBug (id) {
this.props.parent(id)
}
setStatusClosed(id) {
this.props.parent(id)
}
constructor () {
  super();
  this.removeBug = this.removeBug.bind(this)
}

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          ID: {this.props.bugs.id}<br/>
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <span className="tag is-info"> Description: {this.props.bugs.description}</span><br/>
            <span className="tag is-info">Severity : {this.props.bugs.severity}</span><br/>
            <span className="tag is-info">Assigned : {this.props.bugs.assignedto}</span><br/>
            <span className="tag is-info">Status : {this.props.bugs.status}</span><br/>
          </div>
          <br/>
          <small className="tag is-primary">status</small>
        </div>
        <footer className="card-footer">
        <button> <a onClick={() => this.setStatusClosed(this.props.bugs.id)} className="is-warning card-footer-item">Close</a> </button>
        <button> <a className="card-footer-item" onClick={() => this.setRemoveBug(this.props.bugs.id)}>Delete</a> </button>
        </footer>
      </div>
    )}
}
export default Result
