import React from "react";

const Rating = ({onInc, onDec, rating}) => (
  <div>
    <p>{rating}</p>
    <button onClick={onInc}>+</button>
    <button onClick={onDec}>-</button>
  </div>
);

export default Rating;
