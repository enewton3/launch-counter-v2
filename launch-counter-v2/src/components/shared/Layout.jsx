import React from "react";
import Nav from "./Nav";

export default function Layout(props) {
  return (
    <>
      {props.children}
      <Nav />
    </>
  );
}
