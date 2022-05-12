export default {
  //INC: "INC",
  //inc() {
  //  return {type: this.INC};
  //},
  //DEC: "DEC",
  //dec() {
  //  return {type: this.DEC};
  //},
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
  deleteNote(index) {
    return {
      type: this.DELETE_NOTE,
      payload: index,
    };
  },
};
