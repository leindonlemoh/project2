import React from 'react';
import './Business2.css';
import BuyCourseFormCard from '../BuyCourseFormCard/BuyCourseFormCard';

const Business2 = () => {
  return (
    <div className="buy-course-page flex">
        <BuyCourseFormCard 
            title="Advertising"
            price="$249"
            description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
            link="/advertising-checkout-form"
        />
    </div>
  );
};

export default Business2;