// src/components/DOKOBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DOKOBar.css';

const DOKOBar = () => {
  return (
    <div className="restaurant-page">
      <h1>🍹 DOKO Bar</h1>
      <h2 className="tagline">Every sip is power. Every drink is purpose.</h2>

      <p>
        DOKO Bar is the world’s first clean, fully electrolyte-powered drink lounge**. Every drink is designed to help you recover, recharge, and celebrate — naturally.
      </p>
      <p>
        With bold ingredients, cultural blends, and no alcohol in sight, this is the future of nightlife hydration.
      </p>

      <Link to="/menu/bar" className="menu-link">View DOKO Bar Menu</Link>
    </div>
  );
};

export default DOKOBar;
