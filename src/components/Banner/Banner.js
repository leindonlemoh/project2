import React from "react";
import "./Banner.css";
import banner from "../../image/banner-pic.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
      <span>Ever wondered how to take full advantage of your self-study?</span> 
        <p className="text-break banner-text">
        <br/>
          If so,
          this might just be the platform for you. Not only do we have a huge
          selection of courses available at the click of a button, but we also
          provide a complete platform that helps you stay motivated and easily
          track your progress.
        </p>
        <div className="search-email">
          <input
            type="email"
            className="email"
            placeholder="Enter your email"
            name="subscribe"
          />
          <button type="submit" className="submit" name="submit">
          <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <img src={banner} alt="..." className="img-banner" />
    </div>
  );
};

export default Banner;
