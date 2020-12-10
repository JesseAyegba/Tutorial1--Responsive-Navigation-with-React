import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCrosshairs } from "react-icons/fa";
import { showSidebar } from "../store/actions/sidebar";

import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showSidebar());
  };
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <FaCrosshairs className="navbar__icon" />
          <h1>Target</h1>
        </div>
        <ul className="navbar__links">
          <li className="navbar__link">Home</li>
          <li className="navbar__link">About</li>
          <li className="navbar__link">Services</li>
          <li className="navbar__link">Contact</li>
        </ul>
        <GiHamburgerMenu
          onClick={() => handleClick()}
          className="navbar__burger"
        />
      </div>
    </div>
  );
}

export default Navbar;
