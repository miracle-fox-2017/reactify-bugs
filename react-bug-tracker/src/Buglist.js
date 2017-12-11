import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css'

class Buglist extends Component {
  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">tes</p>
        </header>
        <div className="card-content">
          <div className="content">
            askjhdiuhajkshduihaskd askjdhaklsdsa jashdlkasjd
            <br />
            <span className="tag is-primary">sample</span>
            <p>Assigned to: tes</p>
          </div>
        </div>
        <footer className="card-footer">
          <div className="button card-footer-item">Close</div>
          <div className="button card-footer-item">Delete</div>
        </footer>
      </div>
    )
  }
}

export default Buglist