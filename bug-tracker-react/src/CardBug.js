import React from 'react'

class CardBug extends React.Component {
  constructor(props) {
    super(props)
  }

  deleteBug() {
    this.props.deleteBug(this.props.bug.id)
  }

  closeBug() {
    this.props.closeBug(this.props.bug.id)
  }
  render() {
    return (
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
          {this.props.bug.id}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
          {this.props.bug.description}
            <span class="tag is-info"></span>
            <p>Assigned To: {this.props.bug.assignedTo} </p>
            <p>{this.props.bug.status}</p>
            <p>{this.props.bug.severity}</p>
          </div>
          <small class="tag is-primary"></small>
        </div>
        <footer class="card-footer">
          <button class="is-warning card-footer-item" onClick={() => this.closeBug()}>Close</button>
          <button class="card-footer-item" onClick={() => this.deleteBug()}>Delete</button>
        </footer>
      </div>
    );
  }
}

export default CardBug;
