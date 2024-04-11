import React, { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/auth";

function Navbar() {
  const [click, setClick] = useState(false);
  const [auth, setAuth] = useAuth();

  console.log(auth.user)

  const handleClick = () => setClick(!click);

  const handleLinkClick = () => setClick(false);

  return (
    <div className="w-full h-[80px] absolute top-0 left-0 z-50 ">
      <div className="flex justify-between items-center px-10 h-full">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <ul
          className={
            click
              ? "active"
              : "max-[768px]:hidden max-[1290px]:flex gap-6 font-bold "
          }
        >
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
          {!auth?.user ? (
            <Link to="/register">
              <button className="border py-1 px-3 rounded-full font-medium bg-white text-blue-600 hover:bg-transparent hover:text-white   max-[768px]:hidden">
                Register
              </button>
            </Link>
          ) : (
            <Link>
              <button className="border py-1 px-3 rounded-full font-medium bg-white text-blue-600 hover:bg-transparent hover:text-white   max-[768px]:hidden">
                Logout
              </button>
            </Link>
          )}
        </div>
        <div
          className="hidden cursor-pointer max-[768px]:flex relative left-[1.5rem]  "
          onClick={handleClick}
        >
          {click ? (
            <RxCross1 size={20} style={{ color: "#333" }} />
          ) : (
            <RxHamburgerMenu size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
