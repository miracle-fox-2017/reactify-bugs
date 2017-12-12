import React from 'react'

function Item (props) {
  const deleteBug = () => {
    props.hapus(props.id)
  }

    return (
      <div className="panel panel-default">
        <header className="panel-heading">
          <p className="panel-title">
            Id: {props.id}
          </p>
          </header>
          <div className="panel-body">
            <div className="content">
              {props.description}<br/>
              <span className="label label-info">{props.severity}</span>
              <p>Assigned To: {props.assignedTo}</p>
            </div>
            <br/>
            <span className="label label-success">{props.status}</span>
          </div>
          <div className="panel-footer">
          {/* {props.status === 'Open' ? <a onClick={setStatusClosed} className="is-warning card-footer-item">Close</a> : <a disabled className="button is-danger card-footer-item">Closed</a> } */}
          <button type="button" className="btn btn-warning" onClick={deleteBug}>Delete</button>
          </div>
          <br/>
        </div>
      );
  }

export default Item