// src/pages/CustomBooking.js
import React, { useState } from 'react';
import '../styles/GroupsAndTickets.css';

export default function CustomBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    groupSize: '',
    date: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custom Booking Submitted:', formData);
    alert("Thanks for booking your custom DOKO experience! We'll be in touch soon.");
    setFormData({ name: '', email: '', groupSize: '', date: '', notes: '' });
  };

  return (
    <div className="groups-page">
      <h1 className="groups-title">Custom Group Booking</h1>
      <p className="groups-subtext">
        You’re planning something legendary. Let’s make it official.
        Fill out the form below and our team will help craft a DOKO experience built just for you.
      </p>

      <div className="booking-form">
        <h2 className="form-title">Request a Custom Group Experience</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
          <input type="number" name="groupSize" value={formData.groupSize} onChange={handleChange} placeholder="Group Size (10 or more)" required />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Tell us about your event, theme ideas, or special requests..." />
          <button type="submit">Submit Booking Request</button>
        </form>
      </div>
    </div>
  );
}
