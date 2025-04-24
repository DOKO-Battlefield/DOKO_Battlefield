import React from 'react';
import '../styles/GameInfo.css'; // Create this file to style the page
import { Link } from 'react-router-dom';

const GameInfo = () => {
  return (
    <div className="game-info-container">
      <h1 className="game-title">Naqi Combat: Rhythm-Fueled VR Experience</h1>
      <p className="game-tagline">You are the rhythm. The world moves with you.</p>

      <section className="game-section">
        <h2>🎮 What is Naqi?</h2>
        <p>
          Naqi is a rhythm-based, VR combat game that fuses global martial arts with immersive music-driven action. 
          You don’t just fight — you flow. Players select moods, fighting styles, and music genres to shape how the 
          arena looks, sounds, and responds.
        </p>
      </section>

      <section className="game-section">
        <h2>🌍 Gameplay Features</h2>
        <ul>
          <li><strong>Avatar Customization:</strong> Create your warrior with elemental styles and glowing gear.</li>
          <li><strong>Combat Styles:</strong> Capoeira, Kalaripayattu, Shaolin, Copuwatta, and more.</li>
          <li><strong>Music Sync:</strong> Fight in sync with Afrobeat, Hip-Hop, Drill, Classical, or Ambient vibes.</li>
          <li><strong>Arena Worlds:</strong> Explore celestial temples, neon ruins, floating kingdoms, and more.</li>
          <li><strong>Flow Feedback:</strong> Every movement and hit affects your rhythm and mood sync score.</li>
        </ul>
      </section>

      <section className="game-section preview-box">
        <h2>🎥 Preview the Experience</h2>
        <div className="video-placeholder">
          {/* Replace with real video embed later */}
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Naqi Combat Trailer"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="game-section cta">
        <h2>🚀 Ready to Join the Movement?</h2>
        <p>Be the first to experience Naqi. Sign up for early access and updates.</p>
        <Link to="/join-beta" className="cta-button">Join the Beta</Link>
      </section>
    </div>
  );
};

export default GameInfo;
