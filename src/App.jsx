/* eslint-disable no-unused-vars */

import React from 'react';
import Header from './components/common/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/common/Footer';

const App = () => {
  return (
      <div>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <Contact/>
        <Footer/>
      </div>
  );
};

export default App;
