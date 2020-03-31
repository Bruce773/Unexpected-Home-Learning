import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Homepage } from "./Homepage";

const App = () => (
  <div style={{ textAlign: "center", margin: "auto" }}>
    <Router>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
