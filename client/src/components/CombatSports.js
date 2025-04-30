// src/components/CombatSports.js
import React from 'react';
import CombatSportCard from './CombatSportCard';
import '../styles/CombatSports.css';

const combatSports = [
  {
    name: 'Kendo',
    description: 'A fast-paced Japanese sword sport that emphasizes discipline, footwork, and control.',
    image: '/images/kendo.jpg',
    video: '/videos/kendo-preview.mp4'
  },
  {
    name: 'Dagger Throwing',
    description: 'Test your instinct and precision by launching bladed projectiles at reactive targets.',
    image: '/images/dagger.jpg',
    video: ''
  },
  {
    name: 'Archery',
    description: 'Channel focus and grace with each bow-drawn shot in our open-range dome.',
    image: '/images/archery.jpg'
  },
  {
    name: 'Axe Throwing',
    description: 'Raw power meets strategy as you hurl axes toward dynamic rotating targets.',
    image: '/images/axe.jpg'
  },
  {
    name: 'Fencing',
    description: 'Engage in real-time tactical swordplay with light armor and responsive tracking.',
    image: '/images/fencing.jpg'
  }
];

const CombatSports = () => {
  return (
    <div className="experience-detail-page">
      <h1>⚔️ Combat Sports at DOKO</h1>
      <p>
        Every training room is a unique world — combining physical mastery, aesthetic design, and rhythm-based challenge.
        Our combat arenas are designed for all skill levels and guided by smart tech wearables.
      </p>

      <div className="combat-grid">
        {combatSports.map((sport, i) => (
          <CombatSportCard key={i} {...sport} />
        ))}
      </div>
    </div>
  );
};

export default CombatSports;
