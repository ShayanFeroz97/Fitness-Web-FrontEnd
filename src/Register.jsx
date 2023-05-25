import { useNavigate } from "react-router-dom";
import "./Register.css";
import fitness from "./assets/fitnessimg.png";
import logo from "./assets/logo.png";
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formState, setFormState] = useState("register");
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
        navigate("/login");
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
              <br />
              <div className="register_heading">Register</div>
              <br />
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

              <br />
              <input
                value={value.email}
                onChange={handleChange}
                className="register_mail_bar"
                placeholder="Enter Your Email"
                type="email"
                id="email"
                name="email"
              />

              <br />
              <input
                value={value.password}
                onChange={handleChange}
                className="register_pass_bar"
                placeholder="Enter Your Password"
                type="password"
                id="pwd"
                name="password"
              />
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
                    navigate("/login");
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
