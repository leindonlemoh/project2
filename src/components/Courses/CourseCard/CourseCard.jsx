import React from 'react';
import './CourseCard.css';
import { Link } from 'react-router-dom';


const CourseCard = (props) => {
  return (
    <div class="course-card flex">
        <div className="course-icon">
            <img src={props.src} alt={props.alt} />
        </div>
        <div class="course-header">
            <h2 class="h2">{props.heading}</h2>
        </div>

        <div class="course-description flex">
            <p>{props.description}</p>
        </div>

        <Link to={props.link}>
            <div class="course-button">
                {props.course} <i class="bi bi-arrow-right"></i>
            </div>
        </Link>
    </div>
  );
};

export default CourseCard;