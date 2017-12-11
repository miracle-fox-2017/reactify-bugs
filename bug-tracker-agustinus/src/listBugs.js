import React from 'react';
import ItemBug from './itemBug';

const ListBugs = (props) => {
  return (
    <div className="columns">
      <div className="column is-medium">
        {
          props.bugs.map((bug, i) => {
            return (
              <ItemBug
                key={i} 
                id={bug.id}
                description={bug.description}
                assignedTo={bug.assignedTo}
                severity={bug.severity}
                status={bug.status}
                tutup={props.setClose}
                hapus={props.setHapus}
              />
            )
          })
        }
      </div>
    </div>
  );
}


export default ListBugs;