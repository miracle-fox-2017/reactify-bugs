import React from 'react';



function ItemBug (props) {
  const setStatusClosed = () => {
    props.tutup(props.id)
  }
  const deleteBug = () => {
    props.hapus(props.id)
  }
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
        BugId: {props.id}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {props.description}
          <span className="tag is-info">{props.severity}</span>
          <p>Assigned To: {props.assignedTo}</p>
        </div>
        <br/>
        <small className="tag is-primary">{props.status}</small>
      </div>
      <footer className="card-footer">
      {props.status === 'Open' ? <a onClick={setStatusClosed} className="is-warning card-footer-item">Close</a> : <a disabled className="button is-danger card-footer-item">Closed</a> }
      <a className="card-footer-item" onClick={deleteBug}>Delete</a>
      </footer>
      <br/>
    </div>
  );
}

export default ItemBug;