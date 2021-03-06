import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Home from './components/Home';

const prefixs = "https://sdseney508.github.io/React-Port";

function App() {
  return (
    <div>
      <Router>
          <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
