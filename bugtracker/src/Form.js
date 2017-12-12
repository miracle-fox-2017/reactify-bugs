import React, { Component } from 'react'
import ItemList from './ItemList'
import './Form.css'

class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      items: [],
      desc: '',
      severity: '',
      assigned: ''
    }
    this.descChange = this.descChange.bind(this)
    this.severChange = this.severChange.bind(this)
    this.assignChange = this.assignChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div className="bug_tracker">
        <h1 className="title">
          Bug Tracker by HACKTIV8
        </h1>

        <h2>
          Add New Bug Report:
        </h2>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Description</label>
            <input type="text" onChange={ this.descChange } value={ this.state.desc } placeholder="Describe a bug..." />
          </div>

          <div className="form-group">
            <label>Severity</label>
            <select onChange={ this.severChange } value={ this.state.severity }>
              <option> - choose - </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Assigned To</label>
            <input type="text" onChange={ this.assignChange } value={ this.state.assigned } placeholder="Enter resposible..." />
          </div>
          <button>Submit</button>
        </form>
        <ItemList items={ this.state.items }/>
      </div>
    )
  }

  descChange (e) {
    this.setState({
      desc: e.target.value
    })
  }

  severChange (e) {
    this.setState({
      severity: e.target.value
    })
  }

  assignChange (e) {
    this.setState({
      assigned: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      desc: this.state.desc,
      assigned: this.state.assigned,
      severity: this.state.severity
    }
    const newItems = this.state.items
    newItems.push(newItem)
    this.setState({
      items: newItems,
      desc: '',
      severity: '',
      assigned: ''
    })

  }

}

export default Form