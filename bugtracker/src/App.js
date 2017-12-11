import React, { Component } from 'react';
import List from './components/List'
import Chance from 'chance'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const chance = new Chance()
class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        // bugs: JSON.parse(localStorage.getItem('bugs')) || [],
          id: chance.guid(),
          description: '',
          severity: '',
          assignedTo: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClose = this.handleClose.bind(this)
    }

    handleClose = (event) => {

    }

    // handleDelete = (event) => {
    //   let index = localStorage.
    // }
    
    handleSubmit = (event) => {
      // event.preventDefault();
      let objInput = { 
        id: chance.guid(),
        description: this.state.description,
        severity: this.state.severity,
        assignedTo: this.state.assignedTo,
        status: 'Open'
      }
      
      if(localStorage.getItem('bugs')){
        let buglist = localStorage.getItem('bugs')
        let bug = JSON.parse(buglist)
        bug.push(objInput)
        localStorage.setItem('bugs', JSON.stringify(bug))
      } 
      else {
        localStorage.setItem('bugs', JSON.stringify([objInput]))
      }
      
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

  render () {
      return (
        <div class="container">
        <h1>Hactiv8 Bugs</h1>
          <div className = "form" >
          <form onSubmit={this.handleSubmit}>
            <b>Description:</b><br/>
              <input class="form-control" placeholder="Describe a bug..." type="text" name="description" onChange={this.handleInputChange}/><br/>
              <b>Severity:</b><br/>
              <select name="severity" onChange={this.handleInputChange}>
                <option value="">Please Select Severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select><br/>
              <b>Assign to:</b><br/>
              <input class="form-control" placeholder="Enter responsible..." type="text" name="assignedTo" onChange={this.handleInputChange}/><br/>
              <br/>
              <input class="btn btn-info" type="submit" value="Submit"/>
            </form>
            <br/>
          </div>
          <div class="rows">
            <List bugs={this.state} close = {this.handleClose} delete={this.handleDelete}/>
          </div>
        </div>
      )
    }
  }

export default App;
