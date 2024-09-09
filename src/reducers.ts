import { combineReducers } from "redux";
import actions from "./actions";

const notesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          { ...action.payload, id: crypto.randomUUID(), rating: 0 },
        ],
      };
    case actions.EDIT_NOTE:
      const { text, rating, id } = action.payload;
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === id ? { ...note, text, rating } : note,
        ),
      };
    case actions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case actions.INC:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload
            ? { ...note, rating: (note.rating || 0) + 1 }
            : note,
        ),
      };
    case actions.DEC:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload
            ? { ...note, rating: (note.rating || 0) - 1 }
            : note,
        ),
      };
    default:
      return state;
  }
};

export default combineReducers({
  notesReducer,
});
