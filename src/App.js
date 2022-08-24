import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import About from './components/About/About';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
        <Navbar />
        <About/>
        <Footer/>
    </div>
  )
}

export default App;