import React from 'react';
import './Design2.css';
import BuyCourseFormCard from '../BuyCourseFormCard/BuyCourseFormCard';

const Design2 = () => {
  return (
    <div className="buy-course-page flex">
        <BuyCourseFormCard 
            title="Typography 01"
            price="$59"
            description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
        />
    </div>
  );
};

export default Design2;