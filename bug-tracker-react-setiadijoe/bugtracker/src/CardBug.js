import React, {Component} from 'react'

class CardBug extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <div className="mdl-cell--12-col">
        <div className="demo-card-square mdl-card mdl-shadow--2dp">
          <div>
            <h3>BugId: </h3>
            <p>{this.props.CardBugsProps.BugId}</p> 
          </div>
          <div>
            <h3>Severity: </h3>
            <p>{this.props.CardBugsProps.sev}</p>
          </div>
          <div>
            <h3>PIC: </h3>
            <p>{this.props.CardBugsProps.pic}</p>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <button onClick={this.updateParent.bind(this, this.props.CardBugsProps, this.props.indexnya)}
              className="mdl-button mdl-button--colored mdl-js-button">
                status: {this.props.CardBugsProps.status}
            </button><br />
            <button onClick={this.deleteState.bind(this, this.props.indexnya)}
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Delete
            </button>
          </div>
        </div><br /><br />
      </div>
    )
  }

  deleteState (val) {
    this.props.onDelete(val)
  }

  updateParent (objval, index) {
    this.props.onUpdate(objval, index)
  }
}

export default CardBug