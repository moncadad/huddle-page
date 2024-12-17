import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Huddle" className="logo" />
      <button className="btn">Try It Free</button>
    </header>
  );
};

export default Header;
