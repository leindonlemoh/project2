import React from "react";
import "./Footer.css";
import image from "../image/poster.png";

const Footer = () => {
  return (
    <div>
      <img src={image} class="img-fluid" alt="..."></img>
      <footer className="footer">
        <div className="footer-content"></div>

        <div className="footer-bottom">
          <p>
            {" "}
            copyright &copy;2022 <br /> nerd.onlinecourseswebsite by{" "}
            <span>Group 3</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
