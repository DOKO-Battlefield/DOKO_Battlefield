import React from 'react';
import '../styles/Testimonials.css';

// src/components/Testimonials.js
import ComingSoonBanner from '../components/ComingSoonBanner';

const Testimonials = () => {
  return (
    <div className="media-page">
      <h1>💬 Community Testimonials</h1>
      <p>What our warriors and community are saying about DOKO.</p>
      <ComingSoonBanner message="Testimonials will be collected after early access sessions." />
    </div>
  );
};

export default Testimonials;
