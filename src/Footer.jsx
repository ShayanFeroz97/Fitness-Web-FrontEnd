import React from "react";
import "./Footer.css";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";

function Footer() {
  return (
    <div>
      <div className="footer_main">
        <div className="footerss">
        <div className="footer1">
          <div className="footer1_logo">
            <img src={logo} alt="ftrlogo" />
          </div>
          <div className="footer1_para">
            <div>Aorem, ipsum dolor sit a consectetur adipisicing</div>
            <div>Ullam molestias unde expedita culpa repellendus</div>
            <div>explicabo harum dicta dolore adipisci?</div>
          </div>
          <div className="footer1_links">
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="footer2">
          <div className="footer2_heading">Quick Links</div>
          <div className="footer2_links">
            <div>Home</div>
            <div>Contact Us</div>
            <div>News</div>
            <div>About Us</div>
            <div>Weight Loss</div>
          </div>
        </div>
        <div className="footer3">
          <div className="footer3_heading">Course</div>
          <div className="footer3_links">
          <div>Yoga For Beginners</div>
          <div>Balance Body & Mind</div>
          <div>Increased Flexibility</div>
          <div>Vinyasa Yoga</div>
          <div>Hatha Yoga</div>
          </div>
        </div>
        <div className="footer4">
          <div className="footer4_heading">Subscribe Us</div>
          <div className="footer4_label">
            <input className="label" type="text" placeholder="Enter Your Email" />
          </div>
          <div className="footer4_btn">
            <div className="btn">Subscribe</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
