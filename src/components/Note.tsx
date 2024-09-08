import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import Rating from "./Rating";

const Note = ({ note, onEditNote, onDeleteNote, onInc, onDec }) => {
  const pRef = useRef<HTMLSpanElement>(null);
  const [editable, setEditable] = useState(false);

  const handleBlur = () => {
    setEditable(false);
    if (pRef.current) {
      onEditNote({
        ...note,
        text: pRef.current.textContent,
      });
    }
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        ref={pRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        onClick={() => setEditable(true)}
        onBlur={handleBlur}
      >
        {note.text}
      </span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Rating
          rating={note.rating}
          onInc={() => onInc(note.id)}
          onDec={() => onDec(note.id)}
        />
        <button style={{ margin: "1em" }} onClick={() => onDeleteNote(note.id)}>
          x
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onInc: (id) => dispatch(actions.inc(id)),
  onDec: (id) => dispatch(actions.dec(id)),
  onDeleteNote: (id) => dispatch(actions.deleteNote(id)),
  onEditNote: (note) => dispatch(actions.editNote(note)),
});

export default connect(null, mapDispatchToProps)(Note);
