import React from 'react';
import './BusinessPage.css';
import Heading from './Heading/Heading';
import pic1 from '../../image/5.jpg';
import pic3 from '../../image/3.jpg';
import pic8 from '../../image/8.jpg';
import CoursesCard from '../CoursesCard/CoursesCard';

const BusinessPage = () => {
  return (
    <div className="business__main-container">
        <div className="business__banner flex">
          <Heading 
            heading="Start Your Business Career"
            subHeading="Everything you need to build a creative business—from zero to clients and beyond."
          />
        </div>

        <div className="business__courses">
            <div className="business__grid-container grid">
                  <CoursesCard 
                    image={pic1}
                    imagealt="color"
                    title="Finance 101"
                    teacherName="John Macaday"
                    price="$149"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                  />

                  <CoursesCard 
                    image={pic3}
                    imagealt="typography"
                    title="Advertising"
                    teacherName="Victor Baltus"
                    price="$59"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                  />

                  <CoursesCard 
                    image={pic8}
                    imagealt="design"
                    title="Marketing"
                    teacherName="Severus Potter"
                    price="$219"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                  />
            </div>
        </div>

    </div>
  )
}

export default BusinessPage;