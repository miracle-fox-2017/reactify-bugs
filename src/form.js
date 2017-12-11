import React, { Component } from 'react';
import Chance from 'chance'
const chance =  new Chance()

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bugs: [],
			desc: '',
			assignedTo: '',
			severity: '',
			id: '',
			status: ''
		}
	}

	componentWillMount() {
		if(localStorage.getItem('bugs') != '' && localStorage.getItem('bugs') != null ) {
			this.setState({
				bugs: JSON.parse(localStorage.getItem('bugs'))
			})
		}
	}

	descChange(event) {
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

	deleteBug(idBug) {
		this.state.bugs.forEach((bug,i) => {
			if(bug.id == idBug) {
				this.state.bugs.splice(i,1)
			}
		})
		let tempBug = JSON.stringify(this.state.bugs)
		console.log(tempBug)
		localStorage.setItem('bugs', tempBug)
		this.setState({
			bugs: JSON.parse(localStorage.getItem('bugs'))
		})		
	}

	closeBug(idBug) {
		this.state.bugs.forEach((bug,i) => {
			if(bug.id == idBug) {
				if(bug.status == "open"){
					bug.status = "close"
				}
			}
		})
		let tempBug = JSON.stringify(this.state.bugs)
		localStorage.setItem('bugs', tempBug)
		this.setState({
			bugs: JSON.parse(localStorage.getItem('bugs'))
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		let bug = this.state.bugs;
		bug.push({
			id: chance.guid(),
			desc: this.state.desc,
			assignedTo: this.state.assignedTo,
			severity: this.state.severity,
			status: 'open'
		})		
		this.setState({
			bugs: bug
		})
		let tempBug = JSON.stringify(this.state.bugs)
		localStorage.setItem("bugs", tempBug)
		this.state = {
			desc: '',
			assignedTo: '',
			severity: '',
			id: '',
			status: ''
		}		
	}

	render() {
		return (
	        <div className="hero-body">
	          <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
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
	          {this.state.bugs.map((bug, i) => {
	          	return (
					<div className="card" key={i} >
				      <header className="card-header">
				        <p className="card-header-title">
				        BugId: {bug.id}
				        </p>
				      </header>
				      <div className="card-content">
				        <div className="content">
				          {bug.desc}
				          <span className="tag is-info">{bug.severity}</span>
				          <p>Assigned To: {bug.assignedTo} </p>
				        </div>
				        <small className="tag is-primary"> {bug.status} </small>
				      </div>
				      <footer className="card-footer">
				        <a onClick={() => this.closeBug(bug.id)} className="is-warning card-footer-item">Close</a>
				        <a onClick={() => this.deleteBug(bug.id)} className="card-footer-item">Delete</a>
				      </footer>
				    </div>
	          	)
	          })}
	        </div>	  	
	    );    
	}
}

export default Form