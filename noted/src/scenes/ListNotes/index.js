import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import base from "../../base";

class ListNotes extends Component {
  state = {
    notes: {}
  };

  componentDidMount() {
    this.refNotes = base.syncState(`notes`, {
      context: this,
      state: "notes"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.refNotes);
  }

  render() {
    return (
      <div>
        <h1>List Notes</h1>
        <NavLink to="/add-note">Add Note</NavLink>
        <ul>
          {Object.keys(this.state.notes).map(key => (
            <li key={key}>
              <h3>{this.state.notes[key].title}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListNotes;
