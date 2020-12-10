import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store/store";

import { Provider } from "react-redux";

const destination = document.querySelector(".root");

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  destination
);
