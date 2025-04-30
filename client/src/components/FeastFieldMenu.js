// src/components/FeastFieldMenu.js
import React from 'react';
import '../styles/FeastFieldMenu.css';

const FeastFieldMenu = () => {
  return (
    <div className="menu-page">
      <h1>🧺 Feast Field Menu</h1>
      <h2>🥪 Sandwiches</h2>
      <ul>
        <li>Spiced Chickpea Wrap (Plant-Based)</li>
        <li>Grilled Halal Chicken Club</li>
        <li>Roasted Lamb & Mint Sandwich</li>
      </ul>

      <h2>🧀 Charcuterie Boards</h2>
      <ul>
        <li>Classic Fruit & Cheese</li>
        <li>Sweet & Savory Snack Board</li>
        <li>Kid-Friendly Build-a-Board</li>
      </ul>

      <h2>🔥 Grill Stations</h2>
      <ul>
        <li>Beef/Goat Station: Jerk Skewers, Grilled Suya</li>
        <li>Poultry Station: Lemon-Herb Chicken, BBQ Wings</li>
        <li>Plant-Based Station: Mushroom Steaks, Grilled Eggplant Rolls</li>
      </ul>

      <h2>🥤 Drinks</h2>
      <ul>
        <li>Fresh-Pressed Juice Bottles (Mango, Hibiscus, Pineapple Mint)</li>
        <li>House-Infused Iced Teas</li>
        <li>Glass Bottled Water</li>
      </ul>
    </div>
  );
};

export default FeastFieldMenu;
