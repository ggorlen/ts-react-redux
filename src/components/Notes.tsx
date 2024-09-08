import React from "react";
import { connect } from "react-redux";
import actions from "../actions";
import Note from "./Note";

const Notes = ({ notes, onEditNote, onDeleteNote }) => (
  <ul>
    {notes.map((note, i) => (
      <Note
        key={i}
        note={note}
        noteIndex={i}
        onEditNote={(note) => onEditNote({ i, note })}
        onDeleteNote={() => onDeleteNote(i)}
        rating={note.rating}
      />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteNote: (index) => dispatch(actions.deleteNote(index)),
  onEditNote: (payload) => dispatch(actions.editNote(payload)),
});

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;
