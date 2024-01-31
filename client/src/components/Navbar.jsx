import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/favicon.ico";

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = () => setClick(false);
  return (
    <div className="main-container">
      <div className="logo-container">
        <Link className="logo-link">
          <img src={logo} alt="carhub" />
          <h3>CarHub</h3>
        </Link>
      </div>
      <ul className={click ? "active" : "navbar-container"}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        </li>
        <li>
        <Link to="/vehicle" onClick={handleLinkClick}>Vehicle Fleet</Link>
        </li>
        <li>
        <Link to="/team" onClick={handleLinkClick}>Our Team</Link>
        </li>
        <li>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </li>
      </ul>
      <div className="auth-container">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div> 
      <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
    </div>
  );
};

export default Navbar;
