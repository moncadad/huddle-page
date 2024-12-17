import React from "react";
import "./Footer.scss";
import logoImg from "../../assets/images/logow.svg";
import phone from "../../assets/images/icon-phone.svg";
import location from "../../assets/images/icon-location.svg";
import email from "../../assets/images/icon-email.svg";

// react icons imported
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="inner__wrapper section">
        <img src={logoImg} alt="Huddle Logo" className="logo-img" />
        <div className="footer__lower">
          <ul className="contact">
            <li>
              <img src={location} alt="Location Icon" className="icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </li>
            <li>
              <img src={phone} alt="Phone Icon" className="icon" />
              <a href="#"> +1-543-123-4567 </a>
            </li>
            <li>
              <img src={email} alt="Email Icon" className="icon" />
              <a href="">example@huddle.com </a>
            </li>
          </ul>
          <ul className="inner-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul className="inner-links">
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>{" "}
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="social">
            <div className="social-links">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
            <p className="copyright">
              &copy; Copyright 2018 Huddle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
