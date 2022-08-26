import React from 'react';
import './Design1.css';
import BuyCourseFormCard from '../BuyCourseFormCard/BuyCourseFormCard';

const Design1 = () => {
  return (
    <div className="buy-course-page flex">
        <BuyCourseFormCard 
            title="Color for Creatives"
            price="$149"
            description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
            link="/color-checkout-form"
        />
    </div>
  );
};

export default Design1;