import React, { Component } from 'react';
import './App.css';

class CardPost extends Component {
  deleteBug() {
    this.props.deleteBug(this.props.bug.id)
    // console.log("Haloooooooooo apakah masuk sini?")
  }
  changeStatus(){
    this.props.changeStatus(this.props.bug.id)
  }
  render() {
    return (
      <div className="card">
      <header className="card-header">
        <p className="card-header-title">
        {this.props.bug.id}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <span className="tag is-info">

          </span>
          <p>{this.props.bug.description}</p>
          <p>{this.props.bug.severity}</p>
          <p>{this.props.bug.assignedTo}</p>
         
        </div>
       
        <small className="tag is-primary">
        <p>{this.props.bug.status}</p>
        </small>
      </div>
      <footer className="card-footer">
        <button onClick={()=> this.changeStatus()}>Close</button>
        <button onClick={()=> this.deleteBug()}>Delete</button>
      </footer>
    </div>
     
    )
  }
}

export default CardPost
