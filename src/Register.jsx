import "./Register.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";
import React from "react";

function Register() {
    return (
      <div>
        <div className="main">
          <div className="container">
            <div className="container_form_main">
              <div className="container_form">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
  
                <br />
                <br />
                <div className="heading">Register</div>
                <br />
                <br />
  
                <input
                  className="name_bar"
                  placeholder="Enter Your Name"
                  type="name"
                  id="name"
                  name="name"
                />

                <br />
                <input
                  className="mail_bar"
                  placeholder="Enter Your Email"
                  type="email"
                  id="email"
                  name="email"
                />
  
                <br />
                <input
                  className="pass_bar"
                  placeholder="Enter Your Password"
                  type="password"
                  id="pwd"
                  name="pwd"
                ></input>
  <br />
  <br />
                <button className="submit_btn">Register</button>
  {/* <br /> */}
  
              </div>
            </div>
            <div className="container_img">
              <img src={fitness} alt="aa" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;
  