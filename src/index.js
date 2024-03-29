import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./helpers";
import App from "./container/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
