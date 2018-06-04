import React, { Component } from "react";

class EditNote extends Component {
  handleChange = e => {
    const updatedNote = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateNote(this.props.index, updatedNote);
  };

  render() {
    return (
      <div>
        <form method="post">
          <label htmlFor="noteTitle">Title</label>
          <input
            type="text"
            id="noteTitle"
            name="noteTitle"
            value={this.props.details.noteTitle}
            onChange={this.handleChange}
          />
          <label htmlFor="noteContent">Note</label>
          <textarea
            id="noteContent"
            name="noteContent"
            value={this.props.details.noteContent}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default EditNote;
