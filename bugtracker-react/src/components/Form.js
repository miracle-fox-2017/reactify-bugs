import React, {Component} from 'react'
import Chance from 'chance'

const chance = new Chance()
class Form extends Component {
    constructor(props){
      super(props);
      this.state= {
        id: chance.guid(),
        description: '',
        severity: '',
        assignedTo: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleOnChange = this.handleOnChange.bind(this)
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState((state) => {
        console.log(state)
        localStorage.setItem('state', JSON.stringify(state))
      })
    }

    handleOnChange = (event) => {
      this.setState ({
        [event.target.name] : event.target.value
      })
    }
  render () {
    return (
      <div class="container">
        <div className = "form" >
        <form onSubmit={this.handleSubmit}>
          <b>Description:</b><br/>
            <input class="form-control" placeholder="Describe a bug..." type="text" name="description" value={this.state.description} onChange={this.handleOnChange}/><br/>
            <b>Severity:</b><br/>
            <select name="severity" onChange={this.handleOnChange} value={this.state.severity}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select><br/>
            <b>Assign to:</b><br/>
            <input class="form-control" placeholder="Enter responsible..." type="text" name="assignedTo" value={this.state.assignedTo} onChange={this.handleOnChange}/><br/>
            <br/>
            <input class="btn btn-info" type="submit" value="Submit"/>
          </form>
        </div>

        
      </div>
    )
  }
}

export default Form