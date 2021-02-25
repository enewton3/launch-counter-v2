import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";

export default function Layout({ handleLogout, children }) {
  const backgroundImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_TOKEN}`;

  const [backgroundURL, setBackgroundURL] = useState("");

  useEffect(() => {
    const getBackground = async () => {
      const resp = await axios.get(backgroundImageUrl);
      setBackgroundURL(resp.data.url);
    };
    getBackground();
  }, []);

  const useStyles = makeStyles((theme) => ({
    main: {
      background: `url(${backgroundURL})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no repeat",
      height: "91vh",
      width: "100vw",
      position: "absolute",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>{children}</main>
      <Nav handleLogout={handleLogout} />
    </>
  );
}
