import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Catering from './components/Catering';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/services" element={<Catering/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
