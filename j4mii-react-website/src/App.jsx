import React from 'react';
import About from './Pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './App.css'
import './index.css'

function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_#f3f4f6,_#e5e7eb_60%,_#d1d5db_100%)] text-black relative overflow-hidden">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <SocialLinks />
        <Footer />
    </Router>
    </div>
  )
}

export default App
