import React from 'react';
import './CourseCard.css';

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

        <a href="../">
            <div class="course-button">
                {props.course}
            </div>
        </a>
    </div>
  );
};

export default CourseCard;