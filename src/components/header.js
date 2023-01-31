import React from "react";
import { useState } from "react";
import logo2 from "../assets/logo2.PNG";
import "../css/header.css";
const Header = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <img src={logo2} className= "logo" />
      <div className="navbar-menu">
        <a href="#" className="navbar-item">Home</a>
        <a href="#" className="navbar-item">Location</a>
        <a href="#" className="navbar-item">Reservation</a>
        <a href="#" className="navbar-item">Menu</a>
        <a href="#" className="navbar-item btn-order">Order online</a>
      </div>
      </div>
    </nav>
  );
};

export default Header;
