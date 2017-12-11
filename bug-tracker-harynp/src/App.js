import React, { Component } from 'react';
import Form from './Form'
import Footer from './Footer'
import Result from './Result'
import './App.css';

class App extends Component {
  componentWillMount() {
    var bugs = localStorage.getItem('bugs')
    this.setState({data: JSON.parse(bugs)})
  }

  tampilID (id) {
    console.log('INI DIPARENT',id);
  }


  constructor () {
    super ()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <Form/>
        {this.state.data.map((d) => {
          return <Result bugs={d} key={d.id} parent={this.tampilID}/>
        })}
        <Footer/>
      </div>
    );
  }
}

export default App;
