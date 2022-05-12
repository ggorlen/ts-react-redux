import React from "react";
import {connect} from "react-redux";
import actions from "../actions";
import Note from "./Note";

const Notes = ({notes, onEditNote, onDeleteNote}) => (
  <ul>
    {notes.map((e, i) =>
      <Note
        key={i}
        note={e}
        onEditNote={note => onEditNote({i, note})}
        onDeleteNote={() => onDeleteNote(i)}
      />
    )}
  </ul>
);

const mapStateToProps = state => ({
   notes: state.notesReducer.notes,
});

const mapDispatchToProps = dispatch => ({
  onDeleteNote(payload) {
    dispatch(actions.deleteNote(payload));
  },
  onEditNote(payload) {
    dispatch(actions.editNote(payload));
  },
});

const NotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);

export default NotesContainer;

