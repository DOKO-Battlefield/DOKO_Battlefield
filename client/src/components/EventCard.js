// src/components/EventCard.js
import React from 'react'
import '../styles/EventCard.css';

export default function EventCard({ event }) {
  const date = new Date(event.date);

  return (
    <div className="event-card">
      <h2 className="event-title">{event.title}</h2>
      <p className="event-location">{event.location}</p>
      <p className="event-date">{date.toLocaleString()}</p>
      <p className="event-description">{event.description}</p>
    </div>
  );
}
