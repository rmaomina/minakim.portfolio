import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components"
import Portfolios from './pages/Portfolios/Portfolios'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Portfolios />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
