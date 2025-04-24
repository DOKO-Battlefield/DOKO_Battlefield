// src/components/PitchDeckVision.js
import React from 'react';

const PitchDeckVision = () => {
  return (
    <div className="investor-page">
      <h1>📽️ Pitch Deck & Vision</h1>
      <p>
        DOKO Battlefield is more than a venue — it’s a movement redefining combat sports through technology, culture, and immersive storytelling. Below is our investor deck, outlining our business model, impact, and why now is the moment to build this.
      </p>

      <div className="deck-container">
        {/* Embed a Google Drive or PDF viewer if you have it */}
        <iframe
          src="https://drive.google.com/file/d/your-deck-id/preview"
          title="DOKO Pitch Deck"
          width="100%"
          height="600"
          allow="autoplay"
          style={{ border: 'none', borderRadius: '8px' }}
        ></iframe>
      </div>

      <p className="note">
        For a live walkthrough or one-on-one investor call, contact us at: <strong>invest@dokobattlefield.com</strong>
      </p>
    </div>
  );
};

export default PitchDeckVision;
