// src/components/CombatSportCard.js
import React from 'react';
import '../styles/CombatSportCard.css';

const CombatSportCard = ({ name, description, image, video }) => {
  return (
    <div className="combat-card">
      <img src={image} alt={name} className="combat-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      {/* {video && (
        <video controls width="100%" className="combat-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )} */}
    </div>
  );
};

export default CombatSportCard;
