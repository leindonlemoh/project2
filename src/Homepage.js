import React from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Courses from "./components/Courses/Courses";
import BeforeFooter from "./components/BeforeFooter/BeforeFooter";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <Team />
      <About />
      <BeforeFooter />
    </div>
  );
};

export default Homepage;
