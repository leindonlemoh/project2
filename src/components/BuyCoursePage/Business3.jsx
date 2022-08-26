import React from 'react';
import './Business3.css';
import BuyCourseFormCard from '../BuyCourseFormCard/BuyCourseFormCard';

const Business3 = () => {
  return (
    <div className="buy-course-page flex">
        <BuyCourseFormCard 
            title="Marketing"
            price="$219"
            description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
            link="/marketing-checkout-form"
        />
    </div>
  );
};

export default Business3;