import React from 'react';
import './DesignPage.css';
import Heading from './Heading/Heading';
import Color from '../../image/color.jpg';
import Typography from '../../image/typography.jpg';
import Design from '../../image/design.jpg';
import CoursesCard from '../CoursesCard/CoursesCard';

const DesignPage = () => {
  return (
    <div className="design__main-container">
        <div className="design__banner flex">
          <Heading 
            heading="Start Your Design Career"
            subHeading="Master the skills you need to start a design business or land your dream job."
          />
        </div>

        <div className="design__courses">
            <div className="design__grid-container grid">
                  <CoursesCard 
                    image={Color}
                    imagealt="color"
                    title="Color For Creatives"
                    teacherName="John Macaday"
                    price="$149"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                  />

                  <CoursesCard 
                    image={Typography}
                    imagealt="typography"
                    title="Typography 01"
                    teacherName="Victor Baltus"
                    price="$59"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                  />

                  <CoursesCard 
                    image={Design}
                    imagealt="design"
                    title="Grids and Layout"
                    teacherName="Severus Potter"
                    price="$219"
                    description="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."
                  />
            </div>
        </div>

    </div>
  )
}

export default DesignPage;