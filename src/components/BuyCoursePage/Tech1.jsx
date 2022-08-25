import React from 'react';
import './Tech1.css';
import BuyCourseFormCard from '../BuyCourseFormCard/BuyCourseFormCard';

const Tech1 = () => {
  return (
    <div className="buy-course-page flex">
        <BuyCourseFormCard 
            title="Creative Coding"
            price="$349"
            description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
        />
    </div>
  );
};

export default Tech1;