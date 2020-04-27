import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Homepage } from "./Homepage";
import ScrollToTop from "react-router-scroll-top";
import { Resources } from "Resources";
import { LiveComments } from "LiveComments";
import Fab from "@material-ui/core/Fab";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { ContactModal } from "./Components";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
      <Fab
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        onClick={() => setIsOpen(true)}
      >
        <HelpOutlineIcon />
      </Fab>
      <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;
