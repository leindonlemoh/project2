import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav id="nav" className="nav fixed flex">
        <div className="flex">
            <div className="logo__container">
                <h1><a href="../index.html">nerD.</a></h1>
            </div>

            <ul className="nav__list flex">
                <li className="nav__item__left"><a href="../">Home</a></li>
                <li className="nav__item__left"><a href="../">Courses</a></li>
                
                <li className="nav__item__left"><a href="../">Our Mission</a></li>
                <li className="nav__item__left"><a href="../">Meet The Team</a></li>
            </ul>
        </div>
        <div className="flex">
            <ul className="nav__list flex">
                <li className="nav__item__right"><a href="./index.html../faq">FAQ</a></li>
                <li className="nav__item__right"><a href="../">Contact</a></li>
            </ul>
                <input type="button" value="Sign Up" />
        </div>
    </nav>
    </div>
  )
}

export default Navbar