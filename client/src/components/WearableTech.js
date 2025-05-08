// src/components/WearableTech.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';
import "../styles/WearableTech.css";

const WearableTech = () => {
  return (
    <div className="experience-detail-page">
      <h1>💡 Smart Wearable Tech – The DOKO Necklace</h1>
      <p>
        At DOKO Battlefield, technology meets culture. Each guest is given a smart necklace at check-in — a lightweight, waterproof wearable that connects you to the full DOKO experience.
      </p>

      <div className="wearable-section">
        <h2>🔗 Features</h2>
        <ul>
          <li><strong>Team Identification:</strong> Lights up with your team’s color during missions and games.</li>
          <li><strong>Queue Alerts:</strong> Vibrates and flashes when it’s your turn to enter a room.</li>
          <li><strong>QR Scan:</strong> Scan your necklace to view your personal media vault and event activity.</li>
          <li><strong>Real-Time Updates:</strong> Linked to your DOKO schedule — see where to go next via your mobile.</li>
        </ul>
      </div>

      <div className="wearable-section">
        <h2>🔧 Behind the Tech</h2>
        <p>
          Built with ESP32, RGB LEDs, and vibration motors, the DOKO necklace is part of our proprietary wearable system connected to real-time scheduling and media storage APIs.
        </p>
        <p>
          The necklace syncs with our front desk tablets, real-time displays around the building, and your user account.
        </p>
      </div>

      <div className="wearable-section">
        <h2>🎥 Coming Soon</h2>
        <ul>
          <li>Interactive animation showing how the necklace lights up during gameplay</li>
          <li>Mobile view of a sample player dashboard linked to the wearable</li>
          <li>Live map + queue management preview</li>
        </ul>
      </div>

      <ComingSoonBanner message="Smart necklace demo and walkthrough video coming soon!" />
    </div>
  );
};

export default WearableTech;
