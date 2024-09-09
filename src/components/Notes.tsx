import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

const Notes = ({ notes }) => (
  <ul>
    {notes.map((note) => (
      <Note key={note.id} note={note} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  notes: state.notesReducer.notes,
});

export default connect(mapStateToProps)(Notes);
