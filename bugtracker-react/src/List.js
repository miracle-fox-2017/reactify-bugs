import React, {Component} from 'react'
import Item from './Item'
const List = (props) => {
  return (
    <div>
      { props.bugs.map((bug, index) => {
        return (
          <Item 
            key={index}
            id={bug.id}
            description={bug.description}
            assignedTo={bug.assignedTo}
            severity={bug.severity}
            status={bug.status}
            close={props.setClose}
            hapus={props.setDelete}
          />
        )
      })
      }
    </div>
  )
}

export default List