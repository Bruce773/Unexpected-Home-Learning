import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./Homepage";
import ScrollToTop from "react-router-scroll-top";
import { Resources } from "Resources";
import { LiveComments } from "LiveComments";

const App = () => (
  <div style={{ textAlign: "center", margin: "auto" }}>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path="/resources" render={() => <Resources />} />
          <Route path="/live-comments" render={() => <LiveComments />} />
        </Switch>
      </ScrollToTop>
    </Router>
  </div>
);

export default App;
