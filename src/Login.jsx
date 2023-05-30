import { useNavigate } from "react-router-dom";
import "./Login.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";
import {  toast } from 'react-toastify';

import React, { useState } from "react";
import axios from "axios";
import * as EmailValidator from "email-validator";

function Login() {
  const [formState, setFormState] = useState("login");
  const [value, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const notify = () => toast.success(' Login successfully!', {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (value.email.trim() === "") {
      setEmailError("Email can not be empty.");
      return;
    } else if (!EmailValidator.validate(value.email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/;
    if (value.password.trim() === "") {
      setPasswordError("Password can not be empty.");
      return;
    } else if (value.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    } else if (!passwordRegex.test(value.password)) {
      setPasswordError(
        "Password must contain at least one letter, one number and one special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const {
        status,
        data: { token, refreshToken },
      } = await axios.post(`http://localhost:8080/${formState}`, value);
      if (status === 201) {
        notify()
        localStorage.setItem("Token", token);
        localStorage.setItem("RefreshToken", refreshToken);
        // eslint-disable-next-line no-restricted-globals
        location.replace("/");
      }
    } catch (err) {
      alert(err.message);
    }
  };

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
                name="email"
                maxLength='20'

                value={value.email}
                onChange={handleChange}
                className="login_mail_bar"
                placeholder="Enter Your Email"
                onKeyDown={(event) => {
                  if (event.keyCode === 32) {
                    event.preventDefault();
                  }
                }}
                type="email"
                id="email"
              />
              <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>

              <br />
              <input
                maxLength='15'
                name="password"
                value={value.password}
                onChange={handleChange}
                className="login_pass_bar"
                onKeyDown={(event) => {
                  if (event.keyCode === 32) {
                    event.preventDefault();
                  }
                }}
                placeholder="Enter Your Password"
                type="password"
                id="pwd"
              />
              <p style={{ color: "red", fontSize: "12px" }}>{passwordError}</p>

              {/* <div className="login_forget_pass">Forgot password ?</div> */}
              <br />
              {/* <br /> */}
              <button className="login_submit_btn" onClick={handleSubmit}>
                Submit
              </button>
              {/* <br /> */}
              <div className="login_para1">
                Don't have an account ?{" "}
                <span
                  className="login_para2"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </span>
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
