import React, { useState } from 'react';
import "../CSS/About.css" // Create a CSS file for styling

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        Menu
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Login</a>
          <a href="#">Dashboard</a>
        </div>
      )}
    </div>
  );
};

export default About;
