import React from 'react';
import About from './components/About/About';
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Courses from './components/Courses/Courses';

const Homepage = () => {
  return (
    <div>
        <Banner />
        <Courses />
        <About />
        <Team />
    </div>
  );
};

export default Homepage;