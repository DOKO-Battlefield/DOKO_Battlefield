// src/pages/CollaborationTypes.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';
import "../styles/CollaborationTypes.css"

const CollaborationTypes = () => {
  return (
    <div className="partner-page">
      <h1>🔗 Explore Collaboration Opportunities</h1>
      <p>
        DOKO Battlefield thrives on community, culture, and creative partnerships.  
        We’re actively exploring collaborations with artists, educators, brands, technologists, and mission-aligned organizations.
      </p>

      <div className="collab-types-list">
        <div className="collab-type">
          <h2>🎨 Artist Collaborations</h2>
          <p>Design immersive rooms, wearable styles, or themed missions. Custom commissions welcome.</p>
        </div>

        <div className="collab-type">
          <h2>🏫 School & Youth Programs</h2>
          <p>Co-develop physical education field trips, conflict resolution games, or safe exploration environments.</p>
        </div>

        <div className="collab-type">
          <h2>🤝 Brand Partnerships</h2>
          <p>Bring your brand to life through custom events, sponsored arenas, or media package integrations.</p>
        </div>

        <div className="collab-type">
          <h2>📹 Content Creator Access</h2>
          <p>Early entry, exclusive media zones, creator battle nights, and special backstage missions.</p>
        </div>

        <div className="collab-type">
          <h2>🧘 Cultural & Wellness Orgs</h2>
          <p>Create spaces that explore healing, identity, and power through mindful combat experiences.</p>
        </div>
      </div>

      <ComingSoonBanner message="Full collab guide and proposal form coming soon." />
    </div>
  );
};

export default CollaborationTypes;
