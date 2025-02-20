import React, { useState } from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";
import '../componentsStyles/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
   
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

     
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/Services">Services</Link></li>
      </ul>

   
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

 
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Order Online</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
