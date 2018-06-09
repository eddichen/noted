import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import base from "../../base";
import Header from "../../components/Header";
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
        <Header />
        <div className="container">
          <ul className="list__notes">
            {Object.keys(this.state.notes)
              .reverse()
              .map(key => (
                <li key={key} className="list__note-item">
                  <button
                    onClick={() => this.openModal(key)}
                    className="list__button"
                  >
                    {this.state.notes[key].noteTitle}
                  </button>
                </li>
              ))}
          </ul>
          <NavLink to="/add-note" className="button__add-note">
            <span className="button__add-note-text">Add Note</span>
          </NavLink>
        </div>
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
