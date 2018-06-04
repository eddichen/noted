import React, { Component } from "react";
import base from "../../base";

class AddNote extends Component {
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

  addNote = e => {
    e.preventDefault();
    const createdAt = Date.now();
    const title = this.noteTitle.value;
    const content = this.noteContent.value;
    const notes = { ...this.state.notes };
    notes[`note${createdAt}`] = {
      createdAt,
      noteTitle: title,
      noteContent: content
    };
    this.setState({ notes });
    e.currentTarget.reset();
  };

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
          />
          <label htmlFor="noteContent">Note</label>
          <textarea
            id="noteContent"
            name="noteContent"
            ref={noteContent => {
              this.noteContent = noteContent;
            }}
          />
          <button type="submit">Add Note</button>
        </form>
      </div>
    );
  }
}

export default AddNote;
