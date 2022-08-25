import React from 'react';
import './Business1.css';
import BuyCourseFormCard from '../BuyCourseFormCard/BuyCourseFormCard';

const Business1 = () => {
  return (
    <div className="buy-course-page flex">
        <BuyCourseFormCard 
            title="Finance"
            price="$149"
            description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
        />
    </div>
  );
};

export default Business1;