// src/pages/PrivateEvents.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';
import '../styles/PrivateEvents.css';


const PrivateEvents = () => {
  return (
    <div className="event-detail-page">
      <h1>🔒 Private Events at DOKO</h1>
      <p>
        Want to host a birthday, school trip, brand launch, or exclusive group battle inside the arena?
        Our private event experiences include media, full room access, custom scheduling and more.
      </p>
      <ComingSoonBanner message="Private Event booking will be available after launch. Stay tuned!" />
    </div>
  );
};

export default PrivateEvents;
