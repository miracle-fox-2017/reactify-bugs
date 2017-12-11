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

  tampilIDRemove = (id) => {
    // this.state.data = bugs
    this.remove(id)
    // this.updated(id)
  }

  tampilIDEdit = (id) => {
    this.updated(id)
  }

  remove (id) {
  console.log('INI DIREMOVE', id);
  const idx = this.state.data.findIndex((idx) => {
  return idx.id === id
  })
  this.state.data.splice(idx,1)
  console.log('INI INDEX',idx);
  localStorage.setItem('bugs', JSON.stringify(this.state.data));
  }

  updated (id) {
    console.log('INI DIEDIT', id);
  }

  constructor () {
    super ()
    this.state = {
      data: []
    }
    this.remove = this.remove.bind(this)
    this.updated = this.updated.bind(this)
  }

  render() {
    return (
      <div className="App">
        <Form/>
        {this.state.data.map((d) => {
          return <Result bugs={d} key={d.id} parentDelete={this.tampilIDRemove} parentEdit ={this.tampilIDEdit}/>
        })}
        <Footer/>
      </div>
    );
  }
}

export default App;
