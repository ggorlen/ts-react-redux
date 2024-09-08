import React from "react";

const Rating = ({ onInc, onDec, rating }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <button onClick={onInc}>+</button>
    <p style={{ padding: "0.5em", minWidth: "2.5em", textAlign: "center" }}>
      {rating}
    </p>
    <button onClick={onDec}>-</button>
  </div>
);

export default Rating;
