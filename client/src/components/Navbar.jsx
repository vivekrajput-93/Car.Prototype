import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/favicon.ico";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = () => setClick(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: " ",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully", {
      position: "top-center",
    });
  };

  console.log(auth.user);

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
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/vehicle" onClick={handleLinkClick}>
            Vehicle Fleet
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={handleLinkClick}>
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
      {!auth.user ? (
        <div className="auth-container">
          <Link to="/login" className="login">
            Login
          </Link>
          <Link to="/register" className="register">
            Register
          </Link>
        </div>
      ) : (
        <div className="drop-container">
          <button onClick={toggleDropdown} className="drop-btn">
            <PersonIcon className="person" />
            {auth?.user?.username}
          </button>
          {isOpen && (
            <div className="auth-contain">
              <div onClick={handleLogout}>Logout</div>
              <div>dashboard</div>
            </div>
          )}
        </div>
      )}
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "var(--main-color)" }} />
        ) : (
          <FaBars size={20} style={{ color: "var(--main-color)" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
