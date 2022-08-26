import React from 'react';
import './BuyCourseFormCard.css';
import {Link} from 'react-router-dom';

const BuyCourseFormCard = (props) => {
  return (
    <form className="buy-course-form-card">
        <div className="course__title">
          {props.title}
        </div>
        <hr />

        <div className="course__price">
          {props.price}
        </div>

        <div className="course__description">
          {props.description}
        </div>

        <ul className="material__list">
          <li className="material__item"><i class="bi bi-check-circle-fill"></i>3+ hours of video lectures</li>
          <li className="material__item"><i class="bi bi-check-circle-fill"></i>5+ hours bonus webinars</li>
          <li className="material__item"><i class="bi bi-check-circle-fill"></i>Project-based learning</li>
          <li className="material__item"><i class="bi bi-check-circle-fill"></i>Color Guidebook PDF</li>
          <li className="material__item"><i class="bi bi-check-circle-fill"></i>Downloadable project files</li>
        </ul>

        <Link to={props.link}><input type="button" value="Buy Now" /></Link>
    </form>
  );
};

export default BuyCourseFormCard;