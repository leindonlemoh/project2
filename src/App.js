import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import DesignPage from "./components/ServicesPage/DesignPage";
import TechPage from "./components/ServicesPage/TechPage";
import BusinessPage from "./components/ServicesPage/BusinessPage";
import Design1 from './components/BuyCoursePage/Design1';
import Design2 from './components/BuyCoursePage/Design2';
import Business1 from './components/BuyCoursePage/Business1';
import Business2 from './components/BuyCoursePage/Business2';
import Business3 from './components/BuyCoursePage/Business3';
import Tech1 from './components/BuyCoursePage/Tech1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import FAQ from "./components/FAQ/FAQ";

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
          <Route path="/color" element={<Design1 />} />
          <Route path="/typography" element={<Design2 />} />
          <Route path="/finance" element={<Business1 />} />
          <Route path="/advertising" element={<Business2 />} />
          <Route path="/marketing" element={<Business3 />} />
          <Route path="/creative-coding" element={<Tech1 />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
        {/* <CheckoutForm /> not finished yet */}
      </BrowserRouter>
    </div>
  );
};

export default App;
