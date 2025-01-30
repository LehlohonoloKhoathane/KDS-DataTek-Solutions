import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">KDS DataTek Solutions</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

