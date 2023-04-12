
import React from "react";
import '../App.css';

import { Link, NavLink } from "react-router-dom";

function Nav() {

  const navStyle = {
    color: "white",
    //textDecoration: "none"
  };


  return (

    <nav>
      <h3> Logo </h3>

      <ul className="nav-links">

        <Link style={navStyle} to="/home">
          <li>Home</li>
        </Link>
        
        <Link style={navStyle} to="/Page1">
          <li>Page 1</li>
        </Link>

        <NavLink style={navStyle} to="/Page2">
          <li>Page 2</li>
        </NavLink>

        {//this works like Link, but reloads/request to server
        }
        <li><a style={navStyle} href="/Page3"> Page 3</a></li>
        <li><a style={navStyle} href="/"> Home2 </a></li>


      </ul>

    </nav>

  );
};

export default Nav;


//link here takes to the to "/PageX" path, and rendered as a
//but prevents the page from being reloaded

//NavLink applies style of active to links