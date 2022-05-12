import {combineReducers} from "redux";
import actions from "./actions";
/*
const ratingReducer = (state={rating: 0}, action) => {
  switch (action.type) {
    case actions.INC:
      return {...state, rating: state.rating + 1};
    case actions.DEC:
      return {...state, rating: state.rating - 1};
    default:
      return state;
  }
};
*/

const notesReducer = (state={notes: []}, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case actions.EDIT_NOTE:
      const {i, note} = action.payload;
      const {notes} = state;
      return {
        ...state,
        notes: [...notes.slice(0, i), note, ...notes.slice(i + 1)]
      };
    case actions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default combineReducers({
  notesReducer,
 // ratingReducer,
});
