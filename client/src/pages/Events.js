// src/pages/Events.js
import '../styles/Events.css';
import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events') // Adjust if deployed
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Failed to load events:", err));
  }, []);

  return (
    <div className="events-page">
      <h1 className="events-title">Upcoming Events</h1>
     <h2 className="events-slog"> Train. Compete. Celebrate. </h2>
      <p className="info">From live tournaments and ranked battles to cultural showcases and community nights — see what’s happening at DOKO Battlefield.</p>
      {events.length > 0 ? (
        events.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p className="no-events">No events scheduled yet.</p>
      )}
    </div>
  );
}
