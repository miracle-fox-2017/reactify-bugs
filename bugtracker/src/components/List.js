import React, {Component} from 'react'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      bugsList: JSON.parse(localStorage.getItem('bugs'))
    }
  }

  render () {
    return (
      <div class="row">
        {this.state.bugsList.map((item, index) => {
          return (
            <div class="col-sm-6 col-md-8">
            <div class="thumbnail">
              <div class="caption">
                <p>id: { item.id }</p>
                <p>description: { item.description }</p>
                <p>severity: { item.severity }</p>
                <p>{ item.status }</p>
                <p><button class="btn btn-default" role="button">Close</button> <button class="btn btn-warning" role="button">Delete</button></p>
              </div>
            </div>
          </div>
          )
          
        })}
    </div>
    )
  }
}

export default List