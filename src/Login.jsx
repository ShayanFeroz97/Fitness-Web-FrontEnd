import "./Login.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";

import React from "react";

function Login() {
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
              <div className="heading">Login</div>
              <br />
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
              <div className="forget_pass">Forgot password ?</div>
              <br />
              <br />
              <button className="submit_btn">Submit</button>
              {/* <br /> */}
              <div className="para1">
                Don't have an account ? <span className="para2">Register</span>
              </div>
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

export default Login;
