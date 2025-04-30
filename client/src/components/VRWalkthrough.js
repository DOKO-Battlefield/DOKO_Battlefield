// src/components/VRWalkthrough.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';

const VRWalkthrough = () => {
  return (
    <div className="experience-detail-page">
      <h1>🎮 VR Walkthrough</h1>
      <p>
        Enter DOKO before you physically arrive. This 3D virtual tour gives you a full preview of our themed spaces, arenas, and smart tech.
      </p>
      <ComingSoonBanner message="Full VR experience will be available on desktop and headset soon." />
    </div>
  );
};

export default VRWalkthrough;
