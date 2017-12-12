import React, { Component } from 'react';
// import {SelectField, Option} from 'react-mdl-selectfield'
import './App.css';

class FormInput extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      sever: '',
      pic: '', 
      desc: ''
    };
  }

  render() {
    return (
      <div>
        <form>
          <h3> Add Bug Report </h3>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label htmlFor="input_text" className="mdl-textfield__label">Describe a bug</label>
            <input 
              name="desc"
              onChange={this.onChange.bind(this)}
              type="text"
              className="mdl-textField__input"
              id="input_text"
              required />
          </div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label htmlFor="input_text" className="mdl-textfield__label">Severity</label>
            <select
              name="sever"
              value={this.state.sever}
              onChange={this.onChange.bind(this)}
              className="mdl-textField__select"
              id="severity"
              required>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
          </div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <label htmlFor="input_text" className="mdl-textfield__label">Describe a bug</label>
            <input
              name="pic"
              onChange={this.onChange.bind(this)}
              type="text"
              className="mdl-textField__input"
              id="PIC"
              required />
          </div>
          <button onClick={this.dataForm.bind(this)}
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Button
          </button>
        </form>
      </div>
    );
  }

  onChange (e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      console.log(JSON.stringify(this.state))
    })
  }

  dataForm (e) {
    e.preventDefault()
    console.log(this.state)
    this.props.bugs(this.state)
    this.setState({
      desc: '',
      sever: '',
      pic: ''
    })
  }
}

export default FormInput