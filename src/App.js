import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header'
import Portfolios from './pages/Portfolios'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Footer from './pages/Footer.js'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Portfolios />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
