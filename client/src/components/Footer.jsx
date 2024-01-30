import React from "react";
import logo from "../assets/favicon.ico";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <section className="sub-footer-container-1">
        <div className="main-logo-section">
          <span className="span-section">
            <img src={logo} alt="logo" className="footer-logo-link" /> <p>CarHub</p>
          </span>
          <span>Carhub 2024 
            <br />
            All Rights Reserved © About</span>
        </div>
        <div className="main-link-section">
          <ul>
            <li>About</li>
            <li>How its works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>Event</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a Friend</li>
          </ul>
          <ul>
            <li>Socials</li>
            <li>Github</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </section>
      <section className="sub-footer-container-2">
        <h6>@2023 CarHub. All rights reserved</h6>
        <section className="policy-class">
        <p>Privacy & Policy</p>
        <p>Terms&Condition</p>
        </section>
      </section>
    </div>
  );
};

export default Footer;
