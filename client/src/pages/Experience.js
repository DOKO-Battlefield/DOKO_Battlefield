import React from 'react';
import '../styles/Experience.css';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">The DOKO Experience</h1>
      <p className="experience-intro">
        At DOKO Battlefield, combat meets culture through immersive, tech-powered experiences that awaken skill, discipline, and joy.
      </p>

      {/* Combat Sports */}
      <section className="experience-section">
        <h2>🏹 Combat Sports</h2>
        <p>
          Train like a warrior in kendo, dagger throwing, axe throwing, fencing, and archery — all taught by certified instructors in real and virtual arenas. 
          Each room is styled with cultural influence and custom video recaps of your sessions.
        </p>
        <img src="/images/combat_sports_preview.jpg" alt="Combat Sports" className="experience-image" />
      </section>

      {/* VR Walkthrough */}
      <section className="experience-section">
        <h2>🕶️ VR Walkthrough</h2>
        <p>
          Step inside before you arrive. Our virtual walkthrough lets you explore the facility in full 3D, complete with blossoms, bridges, and battle zones.
        </p>
        <Link to="/vr-walkthrough" className="experience-link">Launch VR Walkthrough</Link>
      </section>

      {/* Wearable Tech */}
      <section className="experience-section">
        <h2>💡 Smart Wearables</h2>
        <p>
          Every visitor wears a custom QR-enabled necklace that tracks wait times, media, and matches. It even lights up and buzzes when it’s your turn!
          Guests can access photos/videos of their visit online anytime.
        </p>
        <img src="/images/necklace_demo.jpg" alt="Wearable Tech" className="experience-image" />
      </section>

      {/* Memberships */}
      <section className="experience-section">
        <h2>🏆 Memberships & Access</h2>
        <p>
          From casual explorers to elite warriors — we offer membership tiers that unlock unlimited entry, media access, exclusive nights, and more.
        </p>
        <Link to="/membership" className="experience-link">Explore Memberships</Link>
      </section>
    </div>
  );
};

export default Experience;
