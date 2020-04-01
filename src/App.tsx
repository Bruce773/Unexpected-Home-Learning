import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Resources } from "Resources";

const App = () => (
  <div style={{ textAlign: "center", margin: "auto" }}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
