import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bugs: [],
			desc: '',
			assignedTo: '',
			severity: ''
		}
	}

	descChange(event) {
		console.log(event.target.value)
		this.setState({
			desc: event.target.value
		})
	}

	severityChange(event) {
		this.setState({
			severity: event.target.value
		})
	}
	assignChange(event) {
		this.setState({
			assignedTo: event.target.value
		})		
	}

	handleSubmit(event) {
		event.preventDefault();
		let bug = this.state.bugs;
		bug.push({
			desc: this.state.desc,
			assignedTo: this.state.assignedTo,
			severity: this.state.severity
		})		
		this.setState({
			bugs: bug
		})
	}

	render() {
		return (
	        <div className="hero-body">
	          <h2 className="title">Add New Bug Report:</h2>
	          <form onSubmit={this.handleSubmit.bind(this)}>
	            <label className="label" >Description</label>
	            <p className="control">
	              <input type="text" onChange={this.descChange.bind(this)} placeholder="Describe a bug..." />
	            </p>
	            <label className="label" >Severity</label>
	            <p className="control">
	              <span className="select">
	                <select onChange={this.severityChange.bind(this)} id="severity" name="severity">
	                  <option value="low">Low</option>
	                  <option value="medium">Medium</option>
	                  <option value="high">High</option>
	                </select>
	              </span>
	            </p>
	            <label className="label" >Assigned To</label>
	            <p className="control">
	              <input type="text" onChange={this.assignChange.bind(this)} placeholder="Enter responsible..." />
	            </p>
	            <div className="control is-grouped">
	              <p className="control">
	                <button className="button is-warning">Submit</button>
	              </p>
	            </div>
	          </form>
	        </div>		
	    );    
	}
}

export default Form