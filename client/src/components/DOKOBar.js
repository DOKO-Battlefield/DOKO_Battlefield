// src/components/DOKOBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const DOKOBar = () => {
  return (
    <div className="restaurant-page">
      <h1>🍹 DOKO Bar</h1>
      <p>
        The perfect spot to relax, connect, and celebrate your wins. DOKO Bar features alcohol-free cocktails, cultural drinks, and signature mocktails that reflect the DOKO spirit — bold, bright, and rooted in tradition.
      </p>
      <p>
        Whether you're enjoying a post-battle sip or joining us for a lounge night, DOKO Bar is where memories and mood meet.
      </p>

      <Link to="/menu/bar" className="menu-link">View DOKO Bar Menu</Link>
    </div>
  );
};

export default DOKOBar;
