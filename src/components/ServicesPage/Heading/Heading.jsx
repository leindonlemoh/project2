import React from 'react';
import './Heading.css';

const Heading = (props) => {
  return (
    <div>
        <div className="heading">
            {props.heading} 
        </div>
        <div className="sub-heading">
            {props.subHeading}
        </div>
    </div>
  );
};

export default Heading;