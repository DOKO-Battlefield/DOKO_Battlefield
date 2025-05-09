// src/components/VRWalkthrough.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';
import "../styles/VRWalkthrough.css";
const VRWalkthrough = () => {
  return (
    <div className="vr-walkthrough-page">
      <h1>🎮 Explore DOKO – VR Walkthrough</h1>
      <p className="vr-intro">
        Step into the DOKO world before setting foot on the battlefield. This immersive 3D walkthrough previews our arenas, themed rooms, and next-gen tech.
      </p>

      {/* Replace the src URL with your real video, embed, or iframe link */}
      <div className="vr-video-container">
        <iframe
        src="https://www.youtube.com/embed/Fy1lZMQ7FTc?si=OVIcaOWydeqdTabo"
          title="DOKO VR Walkthrough"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <ComingSoonBanner message="More interactive views and headset access coming soon!" />
    </div>
  );
};

export default VRWalkthrough;
