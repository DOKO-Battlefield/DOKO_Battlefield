// src/components/DOKOYonies.js
import React from 'react';
import { Link } from 'react-router-dom';

const DOKOYonies = () => {
  return (
    <div className="restaurant-page">
      <h1>🍝 DOKOYonies</h1>
      <p>
        A refined indoor dining space featuring bold, globally-inspired comfort food with a DOKO twist. 
        DOKOYonies offers elevated dishes that bring together African, Asian, and Caribbean influence in a modern setting.
      </p>
      <p>
        From hot entrees to sweet baked delicacies, DOKOYonies celebrates flavor, family, and culture through every plate.
      </p>

      <Link to="/menu/dokoyonies" className="menu-link">View DOKOYonies Menu</Link>
    </div>
  );
};

export default DOKOYonies;
