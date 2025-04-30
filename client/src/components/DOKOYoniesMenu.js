// src/components/DOKOYoniesMenu.js
import React from 'react';
import '../styles/DOKOYoniesMenu.css';

const DOKOYoniesMenu = () => {
  return (
    <div className="menu-page">
      <h1>🍝 DOKOYonies Menu</h1>
      <h2>🍲 Entrées</h2>
      <ul>
        <li>Golden Jollof Risotto</li>
        <li>Afro-Asian Noodle Stir Fry</li>
        <li>Caribbean Glazed Salmon with Spiced Couscous</li>
      </ul>

      <h2>🥗 Sides</h2>
      <ul>
        <li>Ginger Roasted Sweet Potatoes</li>
        <li>Coconut Jasmine Rice</li>
        <li>Mixed Greens with Tamarind Vinaigrette</li>
      </ul>

      <h2>🍰 Desserts</h2>
      <ul>
        <li>Cinnamon Plantain Bread Pudding</li>
        <li>Passionfruit Shortcake</li>
        <li>Mini Baklava Bites</li>
      </ul>

      <h2>🍵 Drinks</h2>
      <ul>
        <li>Spiced Sorrel</li>
        <li>Tamarind Juice</li>
        <li>Fresh Herbal Blends</li>
      </ul>
    </div>
  );
};

export default DOKOYoniesMenu;
