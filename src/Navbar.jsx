import React from "react";
import logo from "./assets/logo.png";
import Forms from "./Form";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="Navbar_container">
      <div className="logo_container">
        <img className="logoo" src={logo} alt="" />
      </div>
      <div className="Links_main">
        <div>Home</div>
        <div>About</div>
        <Forms />
        <div
          className="logout_btn"
          onClick={() => {
            localStorage.removeItem("Token");
            localStorage.removeItem("RefreshToken");
            // eslint-disable-next-line no-restricted-globals
            location.replace('/');
          }}
        >
          Log out
        </div>
      </div>
    </div>
  );
}

export default Navbar;
