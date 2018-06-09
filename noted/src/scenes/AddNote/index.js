import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import base from "../../base";
import Header from "../../components/Header";

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
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
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
      </div>
    );
  }
}

export default AddNote;
