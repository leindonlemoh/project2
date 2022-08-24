import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import About from './components/About/About';
import Footer from './Footer/Footer';
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Courses from './components/Courses/Courses';

const App = () => {
  return (
    <div>
        <Navbar />
        <About/>
        <Courses />
        <Footer/>
        <Banner />
        <Team />
    </div>
  );
}

export default App;
