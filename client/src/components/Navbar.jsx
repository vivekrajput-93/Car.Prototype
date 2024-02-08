import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/favicon.ico";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = () => setClick(false);


  const handleLogout = () => {
    console.log("User before logout:", auth.user);
  
    setAuth((prevAuth) => {
      return {
        ...prevAuth,
        user: null,
        token: "",
      };
    });
  
    localStorage.removeItem("user");
    toast.success("Successfully logout");
    navigate("/");
  };

  console.log(auth?.user)


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
        {!auth.user ? (
                <div className="auth-container">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div> 
        ) : (
          <>
          <button className="logout" onClick={handleLogout}>Logout</button>
          <p>{auth?.user?.name}</p>
          </>
        )}
      <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
    </div>
  );
};

export default Navbar;
