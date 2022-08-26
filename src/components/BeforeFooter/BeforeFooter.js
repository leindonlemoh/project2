import React from "react";
import image from "../../image/poster.png";
import './BeforeFooter.css';

const BeforeFooter = () => {
  return (
    <div className="img-cont">
      <img src={image} className="img-fluid" alt="..." />
    </div>
  );
};

export default BeforeFooter;
