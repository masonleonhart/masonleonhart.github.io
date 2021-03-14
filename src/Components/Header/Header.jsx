import "./Header.css";

import { makeStyles, useMediaQuery } from "@material-ui/core";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Header() {
  const useStyles = makeStyles({
    linkIcons: {
      width: 40,
      height: 40,
      margin: "0 10px 0 10px",
      color: "#f9f6eb",
    },
  });

  const classes = useStyles();

  const matches = useMediaQuery("(max-width: 871px)");

  return (
    <div id="header">
      <div id="scrim">
        <div id="me-card" className={matches ? "no-gradient" : ""}>
          <div id="header-info">
            <div id="me-info">
              <p id="full-name-header">Mason Leonhart</p>
              <p id="me-desc">
                Full Stack Software Engineer living in Fargo, ND.
              </p>
            </div>
            <div id="header-link-wrapper">
              <a href="mailto:mason.leonhart@gmaill.com">
                <EmailIcon className={classes.linkIcons} />
              </a>
              <a
                href="https://www.linkedin.com/in/masonleonhart/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className={classes.linkIcons} />
              </a>
              <a
                href="https://github.com/masonleonhart"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className={classes.linkIcons} />
              </a>
            </div>
          </div>
          <img
            id="me-photo"
            src="https://github.com/masonleonhart.png?size=200/"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
