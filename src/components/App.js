import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Services from "./Services";
import Portfolio from "./portfolio";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Services />
        <Portfolio />
      </div>
    );
  }
}

export default App;
