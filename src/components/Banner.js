import React from "react";
import BanImage from "./image/BannerImage.jpg";

class Banner extends React.Component {
  render() {
    return (
      <div class="banner">
        <img src={BanImage} alt="" />
        <h2 class="brand">nerD.</h2>
        <p class="banner-text">
          Ever wondered how to take full advantage of your self-study? If so,
          This might just be the platform for you. Not only do we have a huge
          selection of courses available at the click of a button, but we also
          provide a complete platform that helps you stay motivated and easily
          track your progress.
        </p>
        <input
          type="email"
          class="email "
          value="enter your email"
          name="subscribe"
        />{" "}
        <button type="submit" class="submit" name="submit">
          Subscribe Now
        </button>
      </div>
    );
  }
}
export default Banner;
