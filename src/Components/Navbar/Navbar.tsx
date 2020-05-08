import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { tealGreen, Link } from "globalStyles";

const StyledHeader = styled(Typography)`
  && {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: ${tealGreen};
    text-transform: none;
  }
`;

export const navPages: { name: string; location: string }[] = [
  { name: "Home", location: "/" },
  { name: "Resources", location: "/resources" },
  { name: "Live Comments", location: "/live-comments" },
];

export const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const trigger = useScrollTrigger({ threshold: 300 });

  /*
    @TODO: Look into more performant way of handling state updates
    This component currently unmounts and mounts everytime someone scrolls on the page
  */

  useScrollPosition(({ currPos }) => {
    if (Math.abs(currPos.y) < 100) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  });

  useEffect(() => {
    if (trigger && !isAtTop) {
      setShowNav(true);
    } else if (isAtTop) {
      setShowNav(false);
    }
  }, [isAtTop, trigger]);

  return (
    <Slide appear={false} direction="down" in={showNav}>
      <AppBar
        style={{ backgroundColor: "#e4e4e4" }}
        title="Unexpected Home Learning"
      >
        <Toolbar>
          <Link to="/">
            <Button onClick={() => setIsAtTop(true)}>
              <StyledHeader variant="h5">Unexpected Home Learning</StyledHeader>
            </Button>
          </Link>
          {navPages.map(({ name, location }) => (
            <Link to={location}>
              <Button onClick={() => setIsAtTop(true)}>{name}</Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
