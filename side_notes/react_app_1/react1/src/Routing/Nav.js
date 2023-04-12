
import React from "react";
import '../App.css';

import { Link } from "react-router-dom";

function Nav() {

  const navStyle = {
    color: "white",
    //textDecoration: "none"
  };


  return (

    <nav>
      <h3> Logo </h3>

      <ul className="nav-links">

        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        
        <Link style={navStyle} to="/Page1">
          <li>Page 1</li>
        </Link>

        <Link style={navStyle} to="/Page2">
          <li>Page 2</li>
        </Link>
        

      </ul>

    </nav>

  );
};

export default Nav;


//link here takes to the to "/PageX" path