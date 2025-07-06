// src/components/DOKOBarMenu.js
import React from 'react';
import '../styles/DOKOBarMenu.css';

const DOKOBarMenu = () => {
  return (
    <div className="menu-page">
      <h1>🍹 DOKO Bar Menu</h1>
      <h2>💧 Recovery Fusions</h2>
      <ul>
        <li>**Electric Rose** – Coconut water, rose essence, sea salt, lime</li>
        <li>**Jungle Reboot** – Mango, moringa, baobab powder, ginger</li>
        <li>**Citrus Pulse** – Lemon balm, pink salt, tangerine, organic honey</li>
      </ul>

      <h2>🌿 Cultural Hydration</h2>
      <ul>
        <li>**Zobo Revive** – Hibiscus, ginger, tamarind, trace minerals</li>
        <li>**Soul Mint Tea** – Moroccan mint, fresh herbs, Himalayan salt</li>
        <li>**Golden Roots** – Turmeric, pineapple, black seed, honey</li>
      </ul>

      <h2>🍹 Celebration Sips</h2>
      <ul>
        <li>**Lavender Calm** – Lavender, date syrup, citrus minerals</li>
        <li>**Aloe Pop** – Aloe vera, cucumber, sea salt, lime fizz</li>
        <li>**Hibiscus Spark** – Hibiscus lemonade with magnesium boost</li>
      </ul>

      <h2>🥤 Core Hydration</h2>
      <ul>
        <li>Cold-pressed juices with electrolytes</li>
        <li>Herbal iced teas + trace minerals</li>
        <li>Bubble teas + electrolytes</li>
        <li>Mineral-infused spring waters</li>
      </ul>
    </div>
  );
};

export default DOKOBarMenu;
