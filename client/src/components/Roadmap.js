// src/components/Roadmap.js
import React from 'react';
import '../styles/Roadmap.css';

const Roadmap = () => {
  return (
    <div className="investor-page">
      <h1>🛣️ Launch & Expansion Roadmap</h1>
      <p>This roadmap outlines our core milestones from first pop-up through expansion.</p>

      <ul>
        <li>
          <strong>Q1–Q2 2026:</strong> Finalize legal, business plan, investor materials +
          prepare first DOKO pop-up.
        </li>
        <li>
          <strong>Q3 2026:</strong> Run Detroit DOKO Pop-Up (self-funded) to capture traction,
          content, and early partnerships.
        </li>
        <li>
          <strong>Q4 2026–Q1 2027:</strong> Raise $2.75M to fund the Detroit Pilot + Naqi MVP.
        </li>
        <li>
          <strong>2027:</strong> Open Detroit Pilot location with smart wearables and Naqi
          integrated training experience.
        </li>
        <li>
          <strong>2028–2029:</strong> Raise flagship round ($49.8M), acquire Atlanta land, and
          build the full tech-integrated arena.
        </li>
        <li>
          <strong>Beyond:</strong> Expand to additional U.S. cities and global locations through
          owned arenas and licensed experiences.
        </li>
      </ul>
    </div>
  );
};

export default Roadmap;

