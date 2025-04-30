// src/components/WearableTech.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';

const WearableTech = () => {
  return (
    <div className="experience-detail-page">
      <h1>💡 Smart Wearable Tech</h1>
      <p>
        Every visitor receives a smart necklace upon check-in. It lights up to show your team, buzzes when it's your turn, and links to your personal media vault.
      </p>
      <ComingSoonBanner message="Smart device preview and media demo coming soon!" />
    </div>
  );
};

export default WearableTech;
