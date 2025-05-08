// src/pages/VRGame.js
import React from 'react';
import { Link } from 'react-router-dom';
import ComingSoonBanner from '../components/ComingSoonBanner';
import '../styles/vr-game.css';

const VRGame = () => {
  return (
    <div className="vr-game-page">
      <h1>🧠 Naqi – DOKO's VR Combat Game</h1>
      <p>
        Naqi is our rhythm-based VR combat experience set in the DOKO universe.  
        Choose your avatar, weapon, landscape, and song — and let your spirit guide the fight.
      </p>

      <ComingSoonBanner message="Naqi is currently in development. VR previews and beta coming soon!" />

      <div className="vr-nav-grid">
        <div className="vr-link-card">
          <h2>🕹 Game Info</h2>
          <Link to="/vr-game/info" className="vr-game-link">Explore the Experience</Link>
        </div>

        <div className="vr-link-card">
          <h2>🎥 Screenshots & Demo</h2>
          <Link to="/vr-game/screenshots" className="vr-game-link">Watch Previews</Link>
        </div>

        <div className="vr-link-card">
          <h2>💌 Join Beta / Wishlist</h2>
          <Link to="/vr-game/beta" className="vr-game-link">Sign Up</Link>
        </div>

        <div className="vr-link-card">
          <h2>📓 Developer Notes</h2>
          <Link to="/vr-game/notes" className="vr-game-link">Behind the Scenes</Link>
        </div>
      </div>
    </div>
  );
};

export default VRGame;
