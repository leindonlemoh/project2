import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Team from "./components/Team/Team";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Team />
    </div>
  );
};

export default App;
