import React,{Component} from 'react';

class Header extends Component {
  constructor(){
    super();
    this.style={
      h1:{
        fontSize:'3.0rem',
        fontWeight:300
      }
    }
  }
  render(){
    return(
      <h1 style={this.style.h1} className="title is-1">
        Bug Tracker by HACKTIV8
      </h1>
    )
  }
}

export default Header;
