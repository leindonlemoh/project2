import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
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
