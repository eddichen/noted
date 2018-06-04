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
          {Object.keys(this.state.notes).map(key => (
            <li key={key}>
              <button onClick={() => this.openModal(key)}>
                {this.state.notes[key].title}
              </button>
            </li>
          ))}
        </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Edit Note"
        >
          <EditNote details={this.state.notes[this.state.activeNote]} />
        </Modal>
      </div>
    );
  }
}

export default ListNotes;
