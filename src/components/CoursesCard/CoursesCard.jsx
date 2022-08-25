import React from 'react';
import './CoursesCard.css';
import {Link} from 'react-router-dom';


const CoursesCard = (props) => {
  return (
    <div className="courses-card">
        <div className="courses-card__image">
            <img src={props.image} alt={props.imagealt} />
        </div>

        <div className="courses-card__title">
            <h2>{props.title}</h2>
        </div>

        <div className="courses-card__details flex">
            <div className="courses-card__teacher flex">
                <div className="courses-card__teacher-pic">
                    {props.teacherImage}
                </div>
                <div className="courses-card__teacher-name">
                    {props.teacherName}
                </div>
            </div>

            <div className="courses-card__price">
                {props.price}
            </div>
        </div>

        <div className="courses-card__additional-details">
            <div className="courses-card__description">
                {props.description}
            </div>

            <Link to={props.link}>
                <input type="button" value="Buy Now" />
            </Link>
        </div>
    </div>
  );
};

export default CoursesCard;