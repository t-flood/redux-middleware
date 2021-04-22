import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import { counterReducer } from "./reducer";

const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("middleware ran");
    };
  };
};

const store = createStore(counterReducer, applyMiddleware(myLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
