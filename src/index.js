import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles/App.scss";
import "./styles/mobileApp.scss";
import "./styles/TabletApp.scss";
import App from "./App";
import reducers from "./store/reducers";

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
