import React, { Component } from 'react'

class ItemList extends Component {

  render() {
    
    return (
      <div className="item_list">
        <ul>
          { this.props.items.map(item => (
            <li key={ item.id }>
              <span className="idBug">
                bugId: { item.id }
              </span>
              <span className="title">
                { item.desc }
              </span>
              <span className="body">
                { item.severity }
              </span>
              <span className="footer">
                { item.assigned }
              </span>
              <span>
                <a href="#" className="btn-close">Close</a>
                <a href="#" onClick={ this.removeItem(item.id) }>Delete</a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  removeItem (id) {
    // e.preventDefault()
    // console.log(e.target.value)
    console.log(id)
  }

}

export default ItemList