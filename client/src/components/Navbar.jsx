
import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = () => setClick(false);

  return (
    <div className="w-full h-14 sticky top-0 left-0 z-10  ">
      <div className="flex justify-between items-center px-10 h-full">
          <img 
          src='./assets/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain' />
        <ul className={click ? "active" : "max-[768px]:hidden max-[1290px]:flex gap-6 font-bold "}>
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
            <Link to="/coin" onClick={handleLinkClick}>
              Vehicle
            </Link>
          </li>
          <li>
            <Link to="/exchange" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="btn-group">
          <button className="border py-1 px-3 rounded-full font-medium  max-[768px]:hidden">Regsiter</button>
        </div>
        <div className="hidden cursor-pointer max-[768px]:flex relative left-[1.5rem]  " onClick={handleClick}>
          {click ? <RxCross1 size={20} style={{ color: "#333" }} /> : <RxHamburgerMenu size={20} style={{ color: "#333" }} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
