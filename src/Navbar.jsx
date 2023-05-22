import React from "react";
import logo from "./assets/logo.png"
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar_container">
      <div className="logo_container">
        <img
          className="logoo"
          src={logo}
          alt=""
        />
      </div>
      <div className="Links_main">
        <div>Home</div>
        <div>About</div>
        <div>Course</div>
        <div>Events</div>
        <div className="logout_btn">Log out</div>
      </div>
    </div>
  
  );
}

export default Navbar;


