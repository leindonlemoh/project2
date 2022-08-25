import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import About from './components/About/About';
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import DesignPage from './components/ServicesPage/DesignPage';
import TechPage from './components/ServicesPage/TechPage';
import BusinessPage from './components/ServicesPage/BusinessPage';
import BuyCoursePage from './components/BuyCoursePage/BuyCoursePage';

const App = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Courses />
        <Team />
        <About/>
        <DesignPage />
        <BusinessPage />
        <TechPage />

        <BuyCoursePage/>

        <Footer/>
        
        
    </div>
  );
}

export default App;
