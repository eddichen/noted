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
      <div className="edit-note">
        <form method="post" className="form">
          <label htmlFor="noteTitle" className="form__label">
            Title
          </label>
          <input
            type="text"
            id="noteTitle"
            name="noteTitle"
            value={this.props.details.noteTitle}
            onChange={this.handleChange}
            className="form__input form__input--title edit-note__input"
          />
          <label htmlFor="noteContent" className="form__label">
            Note
          </label>
          <textarea
            id="noteContent"
            name="noteContent"
            value={this.props.details.noteContent}
            onChange={this.handleChange}
            className="form__input form__input--content edit-note__input"
            autoFocus
          />
        </form>
      </div>
    );
  }
}

export default EditNote;
