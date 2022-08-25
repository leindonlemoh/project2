import React from 'react';
import './BuyCoursePage.css';
import BuyCourseFormCard from '../BuyCourseFormCard/BuyCourseFormCard';

const BuyCoursePage = () => {
  return (
    <div className="buy-course-page flex">
        <BuyCourseFormCard 
            title="Color for Creatives"
            price="$149"
            description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
        />
    </div>
  );
};

export default BuyCoursePage;