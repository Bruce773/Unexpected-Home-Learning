import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import ScrollToTop from "react-router-scroll-top";
import { Resources } from "Resources";

const App = () => (
  <div style={{ textAlign: "center", margin: "auto" }}>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/resources" render={() => <Resources />} />
        </Switch>
      </ScrollToTop>
    </Router>
  </div>
);

export default App;
