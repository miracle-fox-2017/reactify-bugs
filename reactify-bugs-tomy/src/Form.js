import React,{Component} from 'react';
import Chance from 'chance';
const chance=new Chance();

class Form extends Component {
  constructor(){
    super();
    this.state={
      desc:'',
      severity:'low',
      assign:'',
      bugs:[]
    }
    this.style={
      h2:{
        fontWeight:300
      },
      heroBody:{
        paddingTop:'125px',
        paddingBottom:'125px'
      },
      input:{
        marginBottom:'10px'
      }
    }
  }
  saveBug(){
    let bugs=this.state.bugs;
    let data={
      id:chance.guid(),
      description:this.state.desc,
      severity:this.state.severity,
      assignedTo:this.state.assign,
      status:'Open'
    }
    bugs.push(data);
    localStorage.setItem('bugs',JSON.stringify(this.state.bugs));
    this.setState({
      desc:'',
      severity:'low',
      assign:'',
      bugs:bugs
    });
  }
  setStatusClosed(targetId){
    const bugs=this.state.bugs;
    const updatedBugs=bugs.map((item) => {
      if(item.id === targetId){
        item.status='Close';
      }
      return item
    });
    this.setState({
      bugs:updatedBugs
    });
    localStorage.setItem('bugs',JSON.stringify(updatedBugs));
  }
  deleteBug(targetId){
    const bugs=this.state.bugs;
    const remainingBugs=bugs.filter((item) => {
      return item.id !== targetId
    });
    this.setState({
      bugs:remainingBugs
    });
    localStorage.setItem('bugs',JSON.stringify(remainingBugs));
  }
  updateDesc(e){
    this.setState({
      desc:e.target.value
    });
  }
  updateSeverity(e){
    this.setState({
      severity:e.target.value
    });
  }
  updateAssign(e){
    this.setState({
      assign:e.target.value
    });
  }
  componentWillMount(){
    if(localStorage.getItem('bugs') != null){
      this.setState({
        bugs:localStorage.getItem('bugs')
      });
    }
  }
  render(){
    return(
      <div>
        <section className="hero is-medium">
          <div className="hero-body" style={this.style.heroBody}>
            <h2 className="title" style={this.style.h2}>Add New Bug Report:</h2>
            <span className="label">Description</span>
            <input type="text" className="input" style={this.style.input} onChange={this.updateDesc.bind(this)} value={this.state.desc}/>
            <span className="label">Severity</span>
            <span className="select" style={this.style.input}>
              <select onChange={this.updateSeverity.bind(this)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </span>
            <span className="label">Assigned To</span>
            <input type="text" className="input" value={this.state.assign} onChange={this.updateAssign.bind(this)}/>
            <button style={{marginTop:'20px'}} onClick={this.saveBug.bind(this)} className="button is-warning">Submit</button>
          </div>
        </section>
        <hr/>
        <div className="columns">
          <div className="column is-medium">
            {this.state.bugs.map((bug,i) => {
              return (
                <div className="card" key={i}>
                  <header className="card-header">
                    <p className="card-header-title">{bug.id}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {bug.description}
                      <span className="tag is-info">{bug.severity}</span>
                      <p>Assigned To : {bug.assignedTo}</p>
                    </div>
                    <small className="tag is-primary">{bug.status}</small>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item" onClick={()=>this.setStatusClosed(bug.id)}>Close</a>
                    <a className="card-footer-item" onClick={()=>this.deleteBug(bug.id)}>Delete</a>
                  </footer>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Form;
