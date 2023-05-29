import { useNavigate } from "react-router-dom";
import "./Register.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";
import React, { useState } from "react";
import axios from "axios";
import * as EmailValidator from "email-validator";

function Register() {
  const [formState, setFormState] = useState("register");
  const [value, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const usernameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;

    if (value.username.trim() === "") {
      setUserNameError("Username can not be empty.");
      return;
    } else if (!usernameRegex.test(value.username)) {
      setUserNameError("Username must only contain alphabets.");
      return;
    } else {
      setUserNameError("");
    }

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
        // localStorage.setItem("Token", token);
        // localStorage.setItem("RefreshToken", refreshToken);

        // eslint-disable-next-line no-restricted-globals
        location.replace("/");
      }
    } catch (err) {
      alert(err.message);
    }
  };

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
              {/* <br /> */}
              <div className="register_heading">Register</div>
              {/* <br /> */}
              <br />

              <input
                name="username"
                value={value.username}
                onChange={handleChange}
                className="register_name_bar"
                placeholder="Enter Your Name"
                type="text"
                id="name"
              />
              <p style={{ color: "red", fontSize: "12px" }}>{userNameError}</p>

              <br />
              <input
                value={value.email}
                onChange={handleChange}
                className="register_mail_bar"
                placeholder="Enter Your Email"
                onKeyDown={(event) => {
                  if (event.keyCode === 32) {
                    event.preventDefault();
                  }
                }}
                type="email"
                id="email"
                name="email"
              />
              <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>

              <br />
              <input
                value={value.password}
                onChange={handleChange}
                className="register_pass_bar"
                placeholder="Enter Your Password"
                type="password"
                id="pwd"
                name="password"
                onKeyDown={(event) => {
                  if (event.keyCode === 32) {
                    event.preventDefault();
                  }
                }}
              />
              <p style={{ color: "red", fontSize: "12px" }}>{passwordError}</p>

              <br />
              {/* <br /> */}
              <button className="register_submit_btn" onClick={handleSubmit}>
                Register
              </button>

              <div className="login_para1">
                Already have an account ?{" "}
                <span
                  className="login_para2"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Login
                </span>
              </div>
              {/* <br /> */}
            </div>
          </div>
          <div className="register_container_img">
            <img src={fitness} alt="aa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
