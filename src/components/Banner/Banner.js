import React from "react";
import "./Banner.css";
import banner from "../../image/banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <p className="text-break banner-text">
          Ever wondered how to take full advantage of your self-study? If so,
          This might just be the platform for you. Not only do we have a huge
          selection of courses available at the click of a button, but we also
          provide a complete platform that helps you stay motivated and easily
          track your progress.
        </p>
        <div className="search-email">
          <input
            type="email"
            className="email"
            value="   Enter your email"
            name="subscribe"
          />
          <button type="submit" className="submit" name="submit">
            Subscribe Now
          </button>
        </div>
      </div>

      <img src={banner} alt="..." className="img-banner" />
    </div>
  );
};

export default Banner;
