// src/components/GameInfo.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';

const GameInfo = () => {
  return (
    <div className="vr-game-info">
      <h1>🕹 What is Naqi?</h1>
      <p>
        Naqi is a VR rhythm combat game where every move is synced to music. Players fight using custom avatars and weapons inside symbolic worlds inspired by the DOKO universe.
      </p>
      <ComingSoonBanner message="Naqi game experience preview coming soon!" />
    </div>
  );
};

export default GameInfo;
