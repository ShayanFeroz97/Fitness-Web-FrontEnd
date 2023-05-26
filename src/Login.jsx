import { useNavigate } from "react-router-dom";
import "./Login.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";

import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [formState, setFormState] = useState("login");
  const [value, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const {
        status,
        data: { token, refreshToken },
      } = await axios.post(`http://localhost:8080/${formState}`, value);
      if (status === 201) {
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
                value={value.email}
                onChange={handleChange}
                className="login_mail_bar"
                placeholder="Enter Your Email"
                type="email"
                id="email"
              />

              <br />
              <input
                name="password"
                value={value.password}
                onChange={handleChange}
                className="login_pass_bar"
                placeholder="Enter Your Password"
                type="password"
                id="pwd"
              />
              <div className="login_forget_pass">Forgot password ?</div>
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
                    navigate('/register');
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
