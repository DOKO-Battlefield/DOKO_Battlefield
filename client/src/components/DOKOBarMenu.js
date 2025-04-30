// src/components/DOKOBarMenu.js
import React from 'react';
import '../styles/DOKOBarMenu.css';

const DOKOBarMenu = () => {
  return (
    <div className="menu-page">
      <h1>🍹 DOKO Bar Menu</h1>
      <h2>🍸 Signature Mocktails</h2>
      <ul>
        <li>Golden Glow – Sparkling mango, hibiscus, edible flowers</li>
        <li>Lavender Eclipse – Lavender syrup, lemon, chilled tonic</li>
        <li>Sakura Storm – Cherry blossom tea, vanilla, crushed ice</li>
      </ul>

      <h2>🌿 Cultural Beverages</h2>
      <ul>
        <li>Sweet Mint Moroccan Tea</li>
        <li>Warm Ginger Pineapple Blend</li>
        <li>Nigerian Chapman (non-alcoholic)</li>
      </ul>

      <h2>🥤 House Classics</h2>
      <ul>
        <li>Fresh-Pressed Juices</li>
        <li>Hibiscus Lemonade</li>
        <li>Cold Brew Herbal Mix</li>
      </ul>
    </div>
  );
};

export default DOKOBarMenu;
