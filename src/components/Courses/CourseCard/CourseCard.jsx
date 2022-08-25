import React from 'react';
import './CourseCard.css';
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';

const CourseCard = (props) => {
  return (
    <div class="course-card flex">
        <div class="course-header flex">
            <h2 class="h2">{props.heading}</h2>
        </div>

        {/* <div class="image">
        </div> */}

        <div class="course-description flex">
            <p>{props.description}</p>
        </div>

        <Link to={props.link}>
            <div class="course-button">
                {props.course}
            </div>
        </Link>
    </div>
  );
};

export default CourseCard;