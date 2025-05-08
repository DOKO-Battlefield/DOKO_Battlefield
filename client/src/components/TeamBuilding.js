// src/pages/TeamBuilding.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';
import '../styles/TeamBuilding.css';


const TeamBuilding = () => {
  return (
    <div className="event-detail-page">
      <h1>🤝 DOKO Team Building Packages</h1>
      <p>
        Boost your team's morale, trust, and creativity through immersive combat-based missions and interactive storytelling.
        Designed for organizations, leadership retreats, schools, and more.
      </p>
      <ComingSoonBanner message="Team Building packages are under development. Launching soon!" />
    </div>
  );
};

export default TeamBuilding;
