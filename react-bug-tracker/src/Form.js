import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css'

class Form extends Component {
  render() {
    return (
      <section class="hero">
        <div class="hero is-medium">
          <h2 class="title">Add New Bug Report:</h2>
        </div>
        <form>
          <div class="field">
            <label class="label">Description:</label>
            <input class="input" type="text" placeholder="Describe a bug..." />
          </div>
          <div class="field">
            <label class="label">Severity:</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Assigned To:</label>
            <input class="input" type="text" placeholder="Enter responsible..." />
          </div>
          <a class="button is-primary">Submit</a>
        </form>
      </section>
    )
  }
}

export default Form;