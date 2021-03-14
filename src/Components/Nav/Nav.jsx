import { useState } from "react";
import { Link } from "react-scroll";

import "./Nav.css";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  useMediaQuery,
  Drawer,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

function Nav() {
  const [drawerToggle, setDrawerToggle] = useState(false);

  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      position: "fixed",
    },
    menuIcon: {
      marginRight: 5,
    },
    navToolbar: {
      minHeight: "fit-content",
    },
    navButton: {
      fontWeight: "bold",
    },
    drawer: {
      width: "40%",
    },
    drawerPaper: {
      width: "40%",
    },
  }));

  const classes = useStyles();

  const matches = useMediaQuery("(min-width: 871px)");

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar id="nav" className={classes.navToolbar}>
          {matches ? (
            <div id="nav-links">
              <Button
                className={classes.navButton}
                color="secondary"
                component={Link}
                to="me"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                Mason
              </Button>
              <Button
                className={classes.navButton}
                color="secondary"
                component={Link}
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Button>
              <Button
                className={classes.navButton}
                color="secondary"
                component={Link}
                to="resume"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                Resume
              </Button>
            </div>
          ) : (
            <Button
              color="secondary"
              onClick={() =>
                !drawerToggle ? setDrawerToggle(true) : setDrawerToggle(false)
              }
            >
              <MenuIcon className={classes.menuIcon} />
              Menu
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer open={drawerToggle} variant="persistent">
        <Toolbar />
        <div id="drawer-links">
          <Button
            className={classes.navButton}
            color="primary"
            component={Link}
            to="me"
            activeClass="drawer-active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setDrawerToggle(false)}
          >
            Mason
          </Button>
          <Button
            className={classes.navButton}
            color="primary"
            component={Link}
            to="about"
            activeClass="drawer-active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setDrawerToggle(false)}
          >
            About
          </Button>
          <Button
            className={classes.navButton}
            color="primary"
            component={Link}
            to="resume"
            activeClass="drawer-active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setDrawerToggle(false)}
          >
            Resume
          </Button>
        </div>
      </Drawer>
    </>
  );
}

export default Nav;
