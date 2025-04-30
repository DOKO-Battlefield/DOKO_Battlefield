// src/pages/Events.js
import '../styles/Events.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ComingSoonBanner from '../components/ComingSoonBanner';
import EventCard from '../components/EventCard';

const Events = () => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/events') // Update to your production URL if needed
  //     .then(res => res.json())
  //     .then(data => setEvents(data))
  //     .catch(err => console.error("Failed to load events:", err));
  // }, []);

  return (
    <div className="events-page">
      <h1 className="events-title">Events & Bookings</h1>
      <h2 className="events-slog">Train. Compete. Celebrate.</h2>
      <p className="info">
      DOKO Battlefield hosts unforgettable combat-focused events for friends, schools, creators, companies, and communities.
      </p>

       <ComingSoonBanner  />
       
      {/* Dynamic Upcoming Events */}
      <section className="events-dynamic">
        <h2>📅 Upcoming Public Events</h2>
        <ComingSoonBanner message="Will have Events After Ofical launch. Stay tuned!" />
        {/* {events.length > 0 ? (
          events.map(event => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="no-events">No events scheduled yet.</p>
        )} */}
      </section>

      {/* Static Booking Options */}
      <section className="events-booking">
        <h2>🎉 Book a Group Experience</h2>
        <div className="events-grid">
          <div className="event-card">
            <h3>🔒 Private Events</h3>
            <p>Reserve entire rooms or the full arena for birthdays, schools, or special moments. Full access & media packages included.</p>
          <p className="tag">Coming Soon</p>
            <Link to="/events/private" className="event-link">Explore Private Events</Link>
          </div>

          <div className="event-card">
            <h3>🤝 Team Building</h3>
            <p>Corporate, organizational, and leadership groups can now train, laugh, and bond through real-world combat missions.</p>
          <p className="tag">Coming Soon</p>
            <Link to="/events/team-building" className="event-link">Team Building Packages</Link>
          </div>

          <div className="event-card">
            <h3>📆 Schedule a Visit</h3>
            <p>Coming with your family or group of friends? Choose your size and ideal time — our team will follow up!</p>
          <p className="tag">Coming Soon</p>
            <Link to="/events/schedule" className="event-link">Schedule Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
