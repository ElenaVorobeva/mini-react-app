import React, { Component } from "react";

//Stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-sec">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
