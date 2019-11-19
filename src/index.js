import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// IE11 Polyfills
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.array.fill";
import "core-js/modules/es6.string.includes";
import "core-js/modules/es6.string.trim";
import "core-js/modules/es7.object.values";

import "./scss/vendors/carbon.scss";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
