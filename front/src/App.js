import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';
import { header } from "./data";
// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Brands from './components/Brands';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Feature4 from './components/Feature4';

import Product from './components/Product';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import WelcomePage from './components/WelcomePage';
import Register from './components/Register/Register';
import Model from './components/Modele/Model';
const App = () => {
  Aos.init({
    duration:1800,
    offset:100,
  })
  return (
    <BrowserRouter>
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Modeles" element={<Model/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
