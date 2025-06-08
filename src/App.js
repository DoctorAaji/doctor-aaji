// client/src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
