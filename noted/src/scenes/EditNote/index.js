import React, { Component } from "react";

class EditNote extends Component {
  render() {
    return (
      <div>
        <form method="post" onSubmit={this.addNote}>
          <label htmlFor="noteTitle">Title</label>
          <input
            type="text"
            id="noteTitle"
            name="noteTitle"
            ref={noteTitle => {
              this.noteTitle = noteTitle;
            }}
            value={this.props.details.title}
          />
          <label htmlFor="noteContent">Note</label>
          <textarea
            id="noteContent"
            name="noteContent"
            ref={noteContent => {
              this.noteContent = noteContent;
            }}
            value={this.props.details.content}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

export default EditNote;
