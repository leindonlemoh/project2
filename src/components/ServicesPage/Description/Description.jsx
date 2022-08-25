import React from 'react';
import './Description.css';

const Description = (props) => {
  return (
    <div className="grid__conta grid">
        <div className="title">
          {props.title}
        </div>

        <div className="message">
          {props.message}
        </div>

    </div>
  )
}

export default Description;