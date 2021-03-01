import React from "react";
import {
  ListItemIcon,
  makeStyles,
  MenuItem,
  SwipeableDrawer,
  // Link,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Person from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import AlarmIcon from "@material-ui/icons/Alarm";

const useStyles = makeStyles((theme) => {
  return {
    menuItem: {
      textDecoration: "none",
      color: theme.palette.primary.dark,
      width: "100%",
      height: "100%",
    },
    menuItemLink: {},
    appInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

export default function NavDrawer({
  handleLogout,
  drawerToggle,
  setDrawerToggle,
}) {
  const classes = useStyles();
  const loggedInOptions = (
    <>
      <MenuItem className={classes.menuItem} divider>
        <ListItemIcon>
          <AlarmIcon />
        </ListItemIcon>
        My Launches
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
        onClick={() => {
          handleLogout();
          setDrawerToggle(false);
        }}
        divider
      >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        Sign Out
      </MenuItem>
    </>
  );

  const loggedOutOptions = (
    <>
      <MenuItem divider>
        <Link
          to="/signin"
          className={classes.menuItem}
          onClick={() => setDrawerToggle(false)}
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          Sign In
        </Link>
      </MenuItem>

      <MenuItem divider>
        <Link
          to="/signup"
          className={classes.menuItem}
          onClick={() => setDrawerToggle(false)}
        >
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          Sign Up
        </Link>
      </MenuItem>
    </>
  );

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={drawerToggle}
      onClose={() => setDrawerToggle(false)}
      onOpen={() => setDrawerToggle(true)}
      className={classes.drawer}
    >
      <MenuItem divider>
        <Link
          to="/"
          className={classes.menuItem}
          onClick={() => setDrawerToggle(false)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          Home
        </Link>
      </MenuItem>

      <UserContext.Consumer>
        {(user) => (user ? loggedInOptions : loggedOutOptions)}
      </UserContext.Consumer>
      <div className={classes.appInfo}>
        <CopyrightIcon />
        Evyn Newton 2021
      </div>
    </SwipeableDrawer>
  );
}
