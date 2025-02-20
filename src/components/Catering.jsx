import React from 'react';
import '../componentsStyles/Catering.css'
function Catering() {
  return (
    <div className="catering-container">
      <h1 className="catering-title">Catering Services</h1>
      <p className="catering-description">
        Elevate your events with our delicious catering options. Perfect for corporate events, weddings, birthdays, and more!
      </p>

      <div className="catering-packages">
        <div className="package">
          <h2>Basic Package</h2>
          <p>Includes 3 appetizers, 2 main courses, and 1 dessert.</p>
          <p className="price">$199</p>
        </div>
        <div className="package">
          <h2>Premium Package</h2>
          <p>Includes 5 appetizers, 3 main courses, 2 desserts, and drinks.</p>
          <p className="price">$349</p>
        </div>
        <div className="package">
          <h2>Luxury Package</h2>
          <p>Full buffet with unlimited food options and premium drinks.</p>
          <p className="price">$499</p>
        </div>
      </div>

      <form className="catering-form">
        <h2>Request Catering</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="date" required />
        <textarea placeholder="Event Details"></textarea>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default Catering;
