// src/components/JoinBeta.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';

const JoinBeta = () => {
  return (
    <div className="vr-beta-page">
      <h1>💌 Join the Naqi Beta</h1>
      <p>Be the first to try the VR combat experience. Sign up below to receive launch updates.</p>
      <ComingSoonBanner message="Beta signup will be available closer to game readiness." />
    </div>
  );
};

export default JoinBeta;
