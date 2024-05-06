import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import Caro from './Components/Caro';
import AboutUsSection from './Components/About';
import ServiceSection from './Components/ServiceSection';
import Footer from './Components/Footer';
import PortfolioSection from './Components/PortfolioSection';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/"  element={<Caro/>} />
          
          <Route exact path="/about" element={<AboutUsSection/>} />
          <Route exact path="/services" element={<ServiceSection/>} />
          <Route exact path="/portfolio" element={<PortfolioSection/>} />
          
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
