import React from "react";
import "./Courses.css";
import "./CourseCard/CourseCard";
import CourseCard from "./CourseCard/CourseCard";

const Courses = () => {
  return (
    <div className="courses flex" id="courses">
      {/* <a id="courses"></a> */}

      <span className="courses-header">Choose A Course Path</span>
      <span className="courses-subheader">Start by choosing a path to focus on. Do you want to be good in design, learn to grow your business or learn new technology.</span>
    
      <section className="courses__container grid">
        <CourseCard
          src={require("../../image/design-pic.png")}
          alt="design-pic"
          heading="Level-Up Your Design Skills"
          description="The Design Career track is here to help you master all the essential skills clients and agency are looking to hire."
          course="Learn Design"
          link="/design-page"
        />

        <CourseCard
          src={require("../../image/business-pic.png")}
          alt="business-pic"
          heading="Start To Grow Your Business"
          description="The Entrepreneur track has everything you need to know and get your creative business up and skyrocket your career."
          course="Learn Business"
          link="/business-page"
        />

        <CourseCard
          src={require("../../image/tech-pic.png")}
          alt="tech-pic"
          heading="Learn New Technical Skills"
          description="The Personal Development track is here to help you learn the discipline in order to become the best version of yourself."
          course="Learn Technology"
          link="/tech-page"
        />
      </section>
    </div>
  );
};

export default Courses;
