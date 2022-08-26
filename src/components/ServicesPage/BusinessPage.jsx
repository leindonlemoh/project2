import React from 'react';
import './BusinessPage.css';
import Heading from './Heading/Heading';
import pic1 from '../../image/finance.jpg';
import pic3 from '../../image/advertising.jpg';
import pic8 from '../../image/marketing.jpg';
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
                    link="/finance"
                  />

                  <CoursesCard 
                    image={pic3}
                    imagealt="typography"
                    title="Advertising"
                    teacherName="Victor Baltus"
                    price="$59"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                    link="/advertising"
                 />

                  <CoursesCard 
                    image={pic8}
                    imagealt="design"
                    title="Marketing"
                    teacherName="Severus Potter"
                    price="$219"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                    link="/marketing"
                  />
            </div>
        </div>

    </div>
  )
}

export default BusinessPage;