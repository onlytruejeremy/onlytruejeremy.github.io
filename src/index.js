import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";
const browserHistory = createBrowserHistory();
const rootElement = document.getElementById("root");
render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  rootElement
);
