import React, { Component } from 'react';
import Bugitem from './Bugitem'

class Buglist extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.bugList.map(bug => {
            return <Bugitem bug={bug} key={bug.id} closeBug={this.props.closeBug} deleteBug={this.props.deleteBug}/>
          })
        }
      </div>
    )
  }

}

export default Buglist