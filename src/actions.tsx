export default {
  INC: "INC",
  inc(id) {
    return { type: this.INC, payload: id };
  },
  DEC: "DEC",
  dec(id) {
    return { type: this.DEC, payload: id };
  },
  ADD_NOTE: "ADD_NOTE",
  addNote(note) {
    return {
      type: this.ADD_NOTE,
      payload: note,
    };
  },
  EDIT_NOTE: "EDIT_NOTE",
  editNote(note) {
    return {
      type: this.EDIT_NOTE,
      payload: note,
    };
  },
  DELETE_NOTE: "DELETE_NOTE",
  deleteNote(id) {
    return {
      type: this.DELETE_NOTE,
      payload: id,
    };
  },
};
