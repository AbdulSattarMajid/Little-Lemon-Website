import React, { useState } from 'react';
import '../componentsStyles/Reservation.css'
function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
    specialRequest: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation Successful!');
  };

  return (
    <div className="reservation-container">
      <h2>Book Your Table</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Your Phone" required onChange={handleChange} />
        <input type="date" name="date" required onChange={handleChange} />
        <input type="time" name="time" required onChange={handleChange} />
        <select name="guests" onChange={handleChange} required>
          {[...Array(10).keys()].map(i => (
            <option key={i + 1} value={i + 1}>{i + 1} Guest(s)</option>
          ))}
        </select>
        <textarea name="specialRequest" placeholder="Any special requests?" onChange={handleChange}></textarea>
        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
}

export default Reservation;
