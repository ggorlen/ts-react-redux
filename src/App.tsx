import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import "./App.scss";

import rootReducer from "./reducers";
const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <div style={{ maxWidth: "300px" }}>
      <AddNote />
      <Notes />
    </div>
  </Provider>
);

export default App;
