import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../componentsStyles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We provide delicious and high-quality food made with fresh ingredients. Our passion is to serve the best meals that bring joy to every bite.</p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: malikabdulsattarmajid.com</p>
          <p>Phone: +1 (234) 567-890</p>
          <p>Location: 123 Food Street, Flavor Town</p>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/abdulsattar-majid-949a97300/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">©AbdulSattarMajid All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
