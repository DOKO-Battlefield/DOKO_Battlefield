// src/components/DOKOFeastField.js
import React from 'react';
import { Link } from 'react-router-dom';

const DOKOFeastField = () => {
  return (
    <div className="restaurant-page">
      <h1>🧺 DOKO Feast Field</h1>
      <p>
        Step into a luxury picnic experience with rustic charm and high-end presentation. 
        DOKO Feast Field features beautiful wicker baskets, curated charcuterie boards, halal-friendly sandwiches, and fresh-pressed juices served in glass bottles.
      </p>
      <p>
        Our outdoor grill stations are separated by meat type — including beef/goat, poultry, and plant-based options — with every station offering clean, vibrant, and culturally respectful service.
      </p>

      <Link to="/menu/feast-field" className="menu-link">View Feast Field Menu</Link>
    </div>
  );
};

export default DOKOFeastField;
