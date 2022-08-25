import React from 'react';
import './TechPage.css';
import Heading from './Heading/Heading';
import Coding from '../../image/creativecoding.jpg';
import CoursesCard from '../CoursesCard/CoursesCard';

const TechPage = () => {
  return (
    <div className="tech__main-container">
        <div className="tech__banner flex">
          <Heading 
            heading="Start Your Tech Career"
            subHeading="Everything you need to build a creative business—from zero to clients and beyond."
          />
        </div>

        <div className="tech__courses">
            <div className="tech__grid-container grid">
                  <CoursesCard 
                    image={Coding}
                    imagealt="coding"
                    title="Creative Coding"
                    teacherName="Tim Rodenbroeker"
                    price="$349"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                    link="/creative-coding"
                  />
            </div>
        </div>

    </div>
  );
};

export default TechPage;