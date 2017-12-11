import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css'

class Buglist extends Component {
  render() {
    return (
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">tes</p>
        </header>
        <div class="card-content">
          <div class="content">
            askjhdiuhajkshduihaskd askjdhaklsdsa jashdlkasjd
            <br />
            <span class="tag is-primary">sample</span>
            <p>Assigned to: tes</p>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Close</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    )
  }
}

export default Buglist