import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "../actions";

const AddNote = ({ onAddNote }) => {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onAddNote({ text });
        setText("");
      }}
    >
      <input value={text} onChange={(evt) => setText(evt.target.value)} />
      <input type="submit" value="add note" />
    </form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onAddNote(payload) {
    dispatch(actions.addNote(payload));
  },
});

const AddNoteContainer = connect(mapStateToProps, mapDispatchToProps)(AddNote);

export default AddNoteContainer;
