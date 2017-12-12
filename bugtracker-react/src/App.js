import React, { Component } from 'react';
import List from './List'
import Chance from 'chance'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const chance = new Chance()
class App extends Component {
    constructor(props){
      super(props);
      this.state= {
        bugs: [],
        bug: {
          id: chance.guid(),
          description: '',
          severity: '',
          assignedTo: '',
          status: 'Open'
        }
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleClose = this.handleClose.bind(this)
    }

    handleClose = (event) => {

    }

    componentWillMount () {
      this.setState({
        bugs: JSON.parse(localStorage.getItem('bugs')) || []
      })
    }

    handleDelete = (id) => {
      let bugs = JSON.parse(localStorage.getItem('bugs'))
      let filter = bugs.filter((item) => {
        return item.id != id
      })
      localStorage.setItem('bugs', JSON.stringify(filter))
      window.location.reload()

    }
    
    handleSubmit = (event) => {
      event.preventDefault();
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

      this.setState(function(state){
        console.log('state disini',state.bug)
      })
      
    }
  
    // handleInputChange(event) {
    //   let state = this.state.bug
    //   state[event.target.name] = event.target.value
    //   console.log('masuk state',state)
    //   this.setState(state)
    // }
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
        <div className="container">
        <h1>Hactiv8 Bugs</h1>
          <div className = "form" >
          <form onSubmit={this.handleSubmit}>
            <b>Description:</b><br/>
              <input className="form-control" placeholder="Describe a bug..." type="text" name="description" onChange={this.handleInputChange}/><br/>
              <b>Severity:</b><br/>
              <select name="severity" onChange={this.handleInputChange}>
                <option value="">Please Select Severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select><br/>
              <b>Assign to:</b><br/>
              <input className="form-control" placeholder="Enter responsible..." type="text" name="assignedTo" onChange={this.handleInputChange}/><br/>
              <br/>
              <input className="btn btn-info" type="submit" value="Submit"/>
            </form>
            <br/>
          </div>
          <div className="rows">
            <List bugs={this.state.bugs} setClose = {this.handleClose} setDelete={this.handleDelete}/>
          </div>
        </div>
      )
    }
  }

export default App;
