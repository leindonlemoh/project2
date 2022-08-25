import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import DesignPage from "./components/ServicesPage/DesignPage";
import TechPage from "./components/ServicesPage/TechPage";
import BusinessPage from "./components/ServicesPage/BusinessPage";
// import BuyCoursePage from './components/BuyCoursePage/BuyCoursePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/design-page" element={<DesignPage />} />
          <Route path="/business-page" element={<BusinessPage />} />
          <Route path="/tech-page" element={<TechPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
