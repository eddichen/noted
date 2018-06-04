import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import base from "../../base";
import EditNote from "../EditNote/index";

Modal.setAppElement("#root");

class ListNotes extends Component {
  state = {
    notes: {},
    modalIsOpen: false,
    activeNote: ""
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

  updateNote = (key, updatedNote) => {
    const notes = { ...this.state.notes };
    notes[key] = updatedNote;
    this.setState({ notes });
  };

  openModal = key => {
    this.setState({ activeNote: key });
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {};

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <h1>List Notes</h1>
        <NavLink to="/add-note">Add Note</NavLink>
        <ul>
          {Object.keys(this.state.notes)
            .reverse()
            .map(key => (
              <li key={key}>
                <button onClick={() => this.openModal(key)}>
                  {this.state.notes[key].noteTitle}
                </button>
              </li>
            ))}
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Edit Note"
        >
          <EditNote
            details={this.state.notes[this.state.activeNote]}
            index={this.state.activeNote}
            updateNote={this.updateNote}
          />
        </Modal>
      </div>
    );
  }
}

export default ListNotes;
