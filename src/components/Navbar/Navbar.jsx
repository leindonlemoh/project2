import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);

  return (
    <nav className="navbar flex fixed">
      <div className="navbar__left-items flex">
        <div className="navbar__logo-container grid">
          <h1 className="navbar__logo">
            <a href="../">nerD.</a>
          </h1>
        </div>
        <ul className="navbar__nav-list nav-list__left flex">
          <li className="navbar__nav-item nav-item__left">
            <a href="../">Home</a>
          </li>
          <li className="navbar__nav-item nav-item__left">
            <a href="../Courses/Courses.jsx#courses">Courses</a>
          </li>
          <li className="navbar__nav-item nav-item__left">
            <a href="../">About Us</a>
          </li>
          <li className="navbar__nav-item nav-item__left">
            <a href="../">Team</a>
          </li>
        </ul>
      </div>

      <div className="navbar__right-items flex">
        <ul className="navbar__nav-list nav-list__right flex">
          <li className="navbar__nav-item nav-item__right">
            <a href="../">FAQ</a>
          </li>
          <li className="navbar__nav-item nav-item__right">
            <a href="../">Contact</a>
          </li>
        </ul>
        <div className="navbar__sign-in-btn grid">Sign In</div>
      </div>

      <div className="navbar__smallscreen flex">
        <div
          className="navbar__nav-menu"
          onClick={() => setToggleNavMenu(true)}
        >
          <i className="bi bi-list"></i>
        </div>

        {toggleNavMenu && (
          <div className="navbar__overlay__smallscreen fixed grid">
            <div
              className="overlay__close"
              onClick={() => setToggleNavMenu(false)}
            >
              <i className="bi bi-x-lg"></i>
            </div>

            <ul className="navbar__nav-list__smallscreen">
              <li className="navbar__nav-item__smallscreen">
                <a href="../">Home</a>
              </li>
              <li className="navbar__nav-item__smallscreen">
                <a href="../">Courses</a>
              </li>
              <li className="navbar__nav-item__smallscreen">
                <a href="#about">About Us</a>
              </li>
              <li className="navbar__nav-item__smallscreen">
                <a href="#team">Team</a>
              </li>
              <li className="navbar__nav-item__smallscreen">
                <a href="../">FAQ</a>
              </li>
              <li className="navbar__nav-item__smallscreen">
                <a href="../">Contact</a>
              </li>
              <li className="navbar__nav-item__smallscreen">
                <a href="../">Sign In</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
