// src/components/Gallery.js
import React from 'react';
import ComingSoonBanner from '../components/ComingSoonBanner';

const Gallery = () => {
  return (
    <div className="media-page">
      <h1>📸 DOKO Gallery</h1>
      <p>Explore powerful moments and cinematic visuals from the DOKO world.</p>
      <ComingSoonBanner message="Gallery will launch with public events and media coverage." />
    </div>
  );
};

export default Gallery;
