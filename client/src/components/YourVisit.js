// src/components/YourVisit.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';
import '../styles/YourVisit.css';

const YourVisit = () => {
  return (
    <div className="media-page">
      <h1>🔐 Access Your Visit</h1>
      <p>
        After your visit, scan your smart necklace or log in to access your photos and video clips.
      </p>
      <ComingSoonBanner message="Your personal media vault will go live at launch!" />
    </div>
  );
};

export default YourVisit;
