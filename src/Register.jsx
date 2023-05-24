import "./Register.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";
import React from "react";

function Register() {
    return (
      <div>
        <div className="register_main">
          <div className="register_container">
            <div className="register_container_form_main">
              <div className="register_container_form">
                <div className="register_logo">
                  <img src={logo} alt="" />
                </div>
  
                <br />
                <br />
                <div className="register_heading">Register</div>
                <br />
                <br />
  
                <input
                  className="register_name_bar"
                  placeholder="Enter Your Name"
                  type="name"
                  id="name"
                  name="name"
                />

                <br />
                <input
                  className="register_mail_bar"
                  placeholder="Enter Your Email"
                  type="email"
                  id="email"
                  name="email"
                />
  
                <br />
                <input
                  className="register_pass_bar"
                  placeholder="Enter Your Password"
                  type="password"
                  id="pwd"
                  name="pwd"
                ></input>
  <br />
  {/* <br /> */}
                <button className="register_submit_btn">Register</button>
  {/* <br /> */}
  
              </div>
            </div>
            <div className="register_container_img">
              <img src={fitness} alt="aa"/>
          </div>
            </div>
         </div>
      </div>
    );
  }
  
  export default Register;
  
