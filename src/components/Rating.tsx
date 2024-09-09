import React from "react";
import { connect } from "react-redux";
import actions from "../actions";

const Rating = ({ rating, onInc, onDec }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <button onClick={onInc}>+</button>
    <p style={{ padding: "0.5em", minWidth: "2.5em", textAlign: "center" }}>
      {rating}
    </p>
    <button onClick={onDec}>-</button>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  onInc: () => dispatch(actions.inc(ownProps.noteId)),
  onDec: () => dispatch(actions.dec(ownProps.noteId)),
});

export default connect(null, mapDispatchToProps)(Rating);
