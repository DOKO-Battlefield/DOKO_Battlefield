// src/pages/ScheduleVisit.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ScheduleVisit.css'; 


const ScheduleVisit = () => {
  return (
    <div className="event-card">
      <h3>📆 Schedule a Visit</h3>
      <p>Coming with your family or group of friends? Choose your size and ideal time — our team will follow up!</p>
      <p className="tag">Coming Soon</p>
      <Link to="/events/schedule" className="event-link">Schedule Now</Link>
    </div>
  );
};

export default ScheduleVisit;
