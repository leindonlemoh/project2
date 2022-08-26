import React from "react";
import about from "../../image/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <a id="about"></a>
      <div className="title">
        <div className="about-title">About Us</div>
      </div>
      <div className="about-content">
        <div className="about-text">
            We are a student of Kodego Philippines who is helping others to
            learn and reinforce skills wherever we are. Whether you want to
            learn a new subject, gain a new skill, or just enhance the ones you
            already have. 
            <br/> <br/>
            We believe in empowering individuals with learning
            disabilities and their difference. We are based in the Philippines.
        </div>

        <div className="about-image">
          <img src={about} class="shape" />
        </div>
      </div>
    </div>
  );
};

export default About;
