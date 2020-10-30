import React, { useContext, useState, useEffect } from "react";
import Link from "./Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import ProfileButton from "./ProfileButton";
import BadgeNotification from "./BadgeNotification"

// theme provider
import { AppContext } from "../states/ContextProvider";
import { changeTheme } from "../states/actions/uiActions";

//Logo
import mainlyBlueLogo from "../assets/BlackLogoBeta.svg";
import mainlyWhiteLogo from "../assets/WhiteLogoBeta.svg";

//state
import { isLoggedIn } from "../states/actions/userActions";

// Icons
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import BookIcon from "@material-ui/icons/Book";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import VideocamIcon from "@material-ui/icons/Videocam";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: "-webkit-sticky",
    // eslint-disable-next-line no-dupe-keys
    position: "sticky",
    top: "0",
    zIndex: "3",
  },
  toolbar: {
    padding: "0px",
  },
  search: {
    marginLeft: theme.spacing(1),
    fontSize: "1.4rem",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inherit",
    },
  },
  ebookButton: {
    fontSize: "1.3rem",
    marginLeft: theme.spacing(4),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
  blogButton: {
    fontSize: "1.3rem",
    marginLeft: theme.spacing(4),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
  contributeButton: {
    fontSize: "1.3rem",
    marginLeft: theme.spacing(4),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
  menuButton: {
    fontSize: "1.3rem",
    color: theme.palette.text.secondary,
    border: `1px solid transparent`,
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: `1px`,
    "&:hover": {
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.text.primary}`,
    },
  },
  logo: {
    width: "auto",
    height: "26px",
    objectFit: "cover",
    cursor: "pointer",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      height: "40px",
    },
  },
}));

//elevation code start
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
//elevation end

const MainMenuNavigationTopDesktop = () => {
  const classes = useStyles();
  const muiTheme = useTheme();
  const [theme, setTheme] = useState(false);
  const { ui, uiDispatch } = useContext(AppContext);

  useEffect(() => {
    defaultSelected();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTheme(ui.isDark);
  }, [ui]);

  const defaultSelected = () => {
    if (document.location.pathname === `/ebooks/`) {
      document.getElementById(
        `top-nav-ebooks-button`
      ).style.border = `1px solid ${
        muiTheme.palette.type === `light` ? `#424242` : `#fff`
      }`;
    }
    if (document.location.pathname === `/blogs/`) {
      document.getElementById(
        `top-nav-blogs-button`
      ).style.border = `1px solid ${
        muiTheme.palette.type === `light` ? `#424242` : `#fff`
      }`;
    }
    if (document.location.pathname === `/blog/new/`) {
      document.getElementById(
        `top-nav-contribution-button`
      ).style.border = `1px solid ${
        muiTheme.palette.type === `light` ? `#424242` : `#fff`
      }`;
    }
  };

  return (
    <React.Fragment key={theme}>
      <div className={classes.grow}>
        <ElevationScroll>
          <AppBar position="static" color="inherit" >
            <Container maxWidth="lg">
              <Toolbar className={classes.toolbar}>
                <Link href="/">
                  <img
                    className={classes.logo}
                    src={ui.isDark ? mainlyWhiteLogo : mainlyBlueLogo}
                    alt="Mainly Logo"
                  />
                </Link>

                <Button
                  href="#"
                  className={classes.search}
                  color="inherit"
                  size="small"
                  component={Link}
                >
                  <SearchOutlined />
                </Button>

                <Button
                  id="#"
                  href="/ebooks/"
                  className={`${classes.ebookButton} ${classes.menuButton}`}
                  color="inherit"
                  size="small"
                  component={Link}
                  startIcon={<MenuBookIcon />}
                >
                  ইবুক
                </Button>
                <Button
                  id="top-nav-blogs-button"
                  href="#"
                  className={`${classes.blogButton} ${classes.menuButton}`}
                  color="inherit"
                  size="small"
                  component={Link}
                  startIcon={<BookIcon />}
                >
                  ব্লগ
                </Button>
                <Button
                  id="top-nav-contribution-button"
                  href="#"
                  className={`${classes.contributeButton} ${classes.menuButton}`}
                  color="inherit"
                  size="small"
                  component={Link}
                  startIcon={<VideocamIcon />}
                >
                  কোর্স
                </Button>

                <div className={classes.grow} />
                
                {isLoggedIn() && <BadgeNotification />}

                <ProfileButton />

                {isLoggedIn() && (
                  <IconButton
                    aria-label="toggle theme"
                    onClick={() => changeTheme(uiDispatch)}
                  >
                    <img
                      src={ui.isDark ? sun : moon}
                      alt={ui.isDark ? "dark-theme" : "light-theme"}
                      width="20px"
                      height="20px"
                    />
                  </IconButton>
                )}
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
      </div>
    </React.Fragment>
  );
};

export default MainMenuNavigationTopDesktop;
