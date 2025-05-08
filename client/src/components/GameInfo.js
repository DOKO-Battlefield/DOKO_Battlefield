// src/components/GameInfo.js
import React from 'react';
import '../styles/GameInfo.css';

const GameInfo = () => {
  return (
    <div className="vr-game-info">
      <h1>🕹 What is Naqi?</h1>
      <p className="intro">
        Naqi is a first-of-its-kind VR rhythm combat game that blends immersive storytelling, symbolic environments, and music-synced action. 
        Inspired by spiritual balance, martial precision, and ancestral legacy, Naqi transports players into the heart of the DOKO universe.
      </p>

      <div className="info-section">
        <h2>🎮 Gameplay Overview</h2>
        <p>
          Players begin their journey in a geometric dome where they choose or AI-generate one of 30 highly detailed avatars, each with unique animations, backstories, and styles. 
          From there, they select a weapon, fighting style, and environment — all tailored to their rhythm and mood. Each move, dodge, and strike syncs perfectly to the music's beat.
        </p>
      </div>

      <div className="info-section">
        <h2>🧠 Combat & Rhythm</h2>
        <p>
          Naqi isn’t about random button mashing. It’s about timing, fluidity, and feeling the music in your soul. 
          Combat styles are inspired by real-world martial arts like Capoeira, Kendo, and custom fantasy techniques, and the gameplay encourages meditative flow-state immersion.
        </p>
      </div>

      <div className="info-section">
        <h2>🌍 Symbolic Worlds</h2>
        <p>
          Each arena is a spiritual and cultural symbol — from domes filled with glowing constellations to sacred temples in floating jungles. 
          The landscapes react to player performance, glowing and pulsing in sync with successful combos and special moves.
        </p>
      </div>

      <div className="info-section">
        <h2>🎵 Music Matters</h2>
        <p>
          Players choose their genre and track before each match, shaping the tempo and visual atmosphere. 
          Music isn't background noise — it's the heartbeat of the game. Soundscapes range from tribal percussion to sci-fi-inspired synths, each altering the gameplay pace and fighting animation rhythm.
        </p>
      </div>

      <div className="info-section">
        <h2>💫 Legacy Integration</h2>
        <p>
          Naqi is deeply tied to the lore of the Noorite Eclipse Saga and the greater DOKO universe. 
          Players experience echoes of story arcs, ancestral guidance, and even spiritual tests. 
          The beads, symbols, and energy flow within the game pay tribute to legacy, faith, and family.
        </p>
      </div>
    </div>
  );
};

export default GameInfo;
