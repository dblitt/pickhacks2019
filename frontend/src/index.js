import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import SetupProcess from "./setup";
import CheckIn from "./checkin";
import MainPage from "./notifications";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/setup" component={SetupProcess} />
      <Route path="/checkin" component={CheckIn} />
      <Route path="/notifications" component={MainPage} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
