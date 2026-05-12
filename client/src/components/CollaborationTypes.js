// src/pages/CollaborationTypes.js
import React from "react";
import ComingSoonBanner from "../components/ComingSoonBanner";
import "../styles/CollaborationTypes.css";

const CollaborationTypes = () => {
  return (
    <div className="partner-page">
      <h1>🔗 Collaboration Opportunities</h1>

      <p>
        DOKO Battlefield is a multi-phase world built on community, culture, and 
        collaboration. As we launch our Detroit Pop-Up and build toward the Detroit 
        Pilot, we're partnering with organizations who want to shape the future of 
        combat-inspired recreation.
      </p>

      <div className="collab-types-list">

        <div className="collab-type">
          <h2>🎨 Artist & Creative Collaborations</h2>
          <p>
            Visual artists, designers, creatives, and builders can help shape 
            immersive rooms, visual identity, and worldbuilding elements.
          </p>
        </div>

        <div className="collab-type">
          <h2>🏫 Schools & Youth Organizations</h2>
          <p>
            Work with us on safe combat sports programs, educational activations, 
            field trips, and youth empowerment sessions.
          </p>
        </div>

        <div className="collab-type">
          <h2>🤝 Brand Partnerships</h2>
          <p>
            From sponsorships to custom activations, brands can play a key role 
            in helping us launch community-first experiences in Detroit.
          </p>
        </div>

        <div className="collab-type">
          <h2>📹 Content Creators & Media</h2>
          <p>
            Early access, behind-the-scenes content, exclusive pop-up nights, 
            and brand storytelling opportunities.
          </p>
        </div>

        <div className="collab-type">
          <h2>🧘 Community, Culture & Wellness Groups</h2>
          <p>
            Collaborate on experiences that center identity, healing, strength, 
            and community-building through guided movement.
          </p>
        </div>

      </div>

      <ComingSoonBanner message="Full collaboration guide launching with the Detroit Pilot." />
    </div>
  );
};

export default CollaborationTypes;

