import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ListNotes extends Component {
  render() {
    return (
      <div>
        <h1>List Notes</h1>
        <NavLink to="/add-note">Add Note</NavLink>
      </div>
    );
  }
}

export default ListNotes;
