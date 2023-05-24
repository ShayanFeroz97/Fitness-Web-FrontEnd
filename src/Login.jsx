import "./Login.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";

import React from "react";

function Login() {
  return (
    <div>
      <div className="login_main">
        <div className="login_container">
          <div className="login_container_form_main">
            <div className="login_container_form">
              <div className="login_logo">
                <img src={logo} alt="" />
              </div>

              <br />
              {/* <br /> */}
              <div className="login_heading">Login</div>
              {/* <br /> */}
              <br />

              <input
                className="login_mail_bar"
                placeholder="Enter Your Email"
                type="email"
                id="email"
                name="email"
              />

              <br />
              <input
                className="login_pass_bar"
                placeholder="Enter Your Password"
                type="password"
                id="pwd"
                name="pwd"
              ></input>
              <div className="login_forget_pass">Forgot password ?</div>
              <br />
              <br />
              <button className="login_submit_btn">Submit</button>
              {/* <br /> */}
              <div className="login_para1">
                Don't have an account ? <span className="login_para2">Register</span>
              </div>
            </div>
          </div>
          <div className="login_container_img">
            <img src={fitness} alt="aa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
