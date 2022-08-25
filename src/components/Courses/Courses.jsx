import React from 'react';
import './Courses.css';
import './CourseCard/CourseCard';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
  return (
    <div className="courses flex" id="courses">
        <h2 className="courses__heading">
            Courses
        </h2>
        <section className="courses__container grid">
            <CourseCard 
                heading="Level-Up Your Design Skills"
                description="The Design Career track is here to help you master all the essential skills clients and agency are looking to hire."
                course="Learn Design"
            />

            <CourseCard 
                heading="Start To Grow Your Business"
                description="The Entrepreneur track has everything you need to get your creative business up and skyrocket your career."
                course="Learn Business"
            />

            <CourseCard 
                heading="Always Be On The Trend"
                description="The Personal Development track is here to help you learn the discipline in order to become the best version of yourself."
                course="Learn Technology"
            />
        </section>
    </div>
  );
};

export default Courses;