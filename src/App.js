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
          <Route path="/color-checkout-form" element={<CheckoutForm image={require("./image/color.jpg")} alt="color" title="Color For Creatives" price="$149" />} />
          <Route path="/typography-checkout-form" element={<CheckoutForm image={require("./image/typography.jpg")} alt="typography" title="Typography 01" price="$59" />} />
          <Route path="/finance-checkout-form" element={<CheckoutForm image={require("./image/finance.jpg")} alt="finance" title="Finance" price="$149" />} />
          <Route path="/advertising-checkout-form" element={<CheckoutForm image={require("./image/advertising.jpg")} alt="advertising" title="Advertising" price="$59" />} />
          <Route path="/marketing-checkout-form" element={<CheckoutForm image={require("./image/marketing.jpg")} alt="marketing" title="Marketing" price="$219" />} />
          <Route path="/creative-coding-checkout-form" element={<CheckoutForm image={require("./image/creativecoding.jpg")} alt="creative-coding" title="Creative Coding" price="$349" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
