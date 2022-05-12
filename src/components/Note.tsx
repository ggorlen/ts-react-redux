import React, {useRef, useState} from "react";

const Note = ({note, onEditNote, onDeleteNote}) => {
  // TODO bug copying state into props, rendering {text} instead of note.text
  // TODO make todos sortable
  // TODO styled-components style={{display: 'flex', justifyContent: 'space-between'}}>
  const pRef = useRef();
  const [editable, setEditable] = useState(false);
  return (
    <li>
      <p
        ref={pRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        onClick={() => setEditable(true)}
        onBlur={() => {
          setEditable(false);
          onEditNote({text: pRef.current.textContent});
        }}
      >
        {note.text}
      </p>
      <button onClick={onDeleteNote}>x</button>
    </li>
  );
};

export default Note;
      //<Rating rating={rating} onInc={onInc} onDec={onDec} />


/*
import {connect} from "react-redux";
import actions from "../actions";
import Rating from "./rating";

const Note = ({text, onInc, onDec, rating}) => {
  return (
    <div>
      <p>{text}</p>
      <Rating rating={rating} onInc={onInc} onDec={onDec} />
    </div>
  );
};

const mapStateToProps = state => ({
  rating: state.noteReducer.noteScore,
});

const mapDispatchToProps = dispatch => ({
  onUpnote() {
    dispatch(actions.upnote());
  },
  onDownnote() {
    dispatch(actions.downnote());
  },
});

const NoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);

export default NoteContainer;
*/
