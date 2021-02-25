import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { UserContext } from "../../context/UserContext";

export default function Nav({ handleLogout }) {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const useStyles = makeStyles((theme) => ({
    appBar: {
      top: "auto",
      bottom: 0,
      height: "9vh",
    },
    toolBar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
    },
    title: { color: "white", textDecoration: "none" },
    buttons: {
      color: "white",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    greeting: {},
  }));

  const classes = useStyles();

  const toggleDrawer = () => {
    setDrawerToggle((prev) => !prev);
  };

  return (
    <AppBar className={classes.appBar} position="fixed" color="primary">
      <Toolbar className={classes.toolBar}>
        <IconButton className={classes.buttons} onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Link to="/" className={classes.title}>
          <Typography className={classes.title} variant="h6" noWrap>
            Launch Counter 2.0
          </Typography>
        </Link>
        <UserContext.Consumer>
          {(user) =>
            user ? (
              <Typography
                className={classes.greeting}
              >{`Welcome, ${user.username}`}</Typography>
            ) : null
          }
        </UserContext.Consumer>
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
      <NavDrawer
        setDrawerToggle={setDrawerToggle}
        drawerToggle={drawerToggle}
        handleLogout={handleLogout}
      />
    </AppBar>
  );
}
