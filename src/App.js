import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./stores";

import User from "./components/user";

function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
