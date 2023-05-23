import React from "react";
import logo from "./assets/logo.png"
import Forms from "./Form";
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
      <Forms/>
        <div className="logout_btn">Log out</div>
      </div>
    </div>
  
  );
}

export default Navbar;


