import React, { Component } from "react";

/** stateless functional component returns a react element
shortcut sfc*/
const Navbar=(props)=>{
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="http://bbc.co.uk">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary">
              {props.totalCounters}
            </span>
          </a>
        </nav>
      );
}

export default Navbar;
