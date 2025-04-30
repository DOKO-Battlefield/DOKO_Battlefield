// src/pages/PartnerWithUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PartnerWithUs.css';

const PartnerWithUs = () => {
  return (
    <div className="partners-container">
      <h1>🤝 Partner With Us</h1>
      <p className="partners-intro">
        DOKO Battlefield is more than a venue — it’s a movement. We’re looking for brands, educators, creatives, and organizations that want to shape immersive, high-impact experiences.
      </p>

      <div className="partner-grid">
        <div className="partner-card">
          <h2>🔗 Collaboration Types</h2>
          <p>See the ways your brand or mission can align with DOKO’s cultural and combat-driven experiences.</p>
          <Link to="/partners/collaboration-types" className="partner-link">Explore Collaboration Options</Link>
        </div>

        <div className="partner-card">
          <h2>🏟️ Venue & Co-Branding</h2>
          <p>Bring your team, audience, or event to DOKO. We offer full customization and powerful media recaps.</p>
          <Link to="/partners/cobranding" className="partner-link">Venue Packages & Co-Branding</Link>
        </div>

        <div className="partner-card">
          <h2>📬 Contact Us</h2>
          <p>Let’s build something unforgettable. Reach out to share your ideas or request a collaboration.</p>
          <Link to="/partners/contact-form" className="partner-link">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
