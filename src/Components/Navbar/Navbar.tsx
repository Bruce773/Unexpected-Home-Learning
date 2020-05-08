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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import ChatIcon from "@material-ui/icons/Chat";

const StyledHeader = styled(Typography)`
  && {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: ${tealGreen};
    text-transform: none;
  }
`;

const MobileNavButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
`;

interface NavPageType {
  name: string;
  location: string;
  icon: JSX.Element;
}

export const navPages: NavPageType[] = [
  {
    name: "Home",
    location: "/",
    icon: <HomeIcon fontSize="small" style={{ marginRight: "5px" }} />,
  },
  {
    name: "Resources",
    location: "/resources",
    icon: <ListIcon fontSize="small" style={{ marginRight: "5px" }} />,
  },
  {
    name: "Live Comments",
    location: "/live-comments",
    icon: <ChatIcon fontSize="small" style={{ marginRight: "5px" }} />,
  },
];

export const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);

  const trigger = useScrollTrigger({ threshold: 300 });

  const isNotMobile = useMediaQuery("(min-width:600px)");

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
      if (showMobileNavMenu) setShowMobileNavMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAtTop, trigger]);

  const LinkMainHeader: React.FC = () => (
    <Link to="/">
      <Button onClick={() => setIsAtTop(true)}>
        <StyledHeader variant={isNotMobile ? "h5" : "h6"}>
          Unexpected Home Learning
        </StyledHeader>
      </Button>
    </Link>
  );

  return (
    <Slide appear={false} direction="down" in={showNav}>
      <AppBar
        style={{ backgroundColor: "#e4e4e4" }}
        title="Unexpected Home Learning"
      >
        {!isNotMobile ? (
          <>
            <Toolbar>
              <IconButton
                onClick={() => setShowMobileNavMenu(!showMobileNavMenu)}
                style={{ paddingLeft: "0px" }}
              >
                <MenuIcon />
              </IconButton>
              <div style={{ paddingLeft: "12px" }}>
                <LinkMainHeader />
              </div>
            </Toolbar>
            {showMobileNavMenu && (
              <Slide direction="down" appear={false} in={showMobileNavMenu}>
                <>
                  {navPages.map(({ name, location, icon }) => (
                    <Link style={{ textAlign: "center" }} to={location}>
                      <MobileNavButton
                        variant="outlined"
                        onClick={() => setIsAtTop(true)}
                      >
                        {icon}
                        {name}
                      </MobileNavButton>
                    </Link>
                  ))}
                </>
              </Slide>
            )}
          </>
        ) : (
          <Toolbar>
            <LinkMainHeader />{" "}
            {navPages.map(({ name, location }) => (
              <Link to={location}>
                <Button onClick={() => setIsAtTop(true)}>{name}</Button>
              </Link>
            ))}
          </Toolbar>
        )}
      </AppBar>
    </Slide>
  );
};
