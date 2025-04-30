// src/components/ComingSoonBanner.js
import React from 'react';
// import '../styles/ComingSoonBanner.css'; // Optional if you want to style it separately

export default function ComingSoonBanner({ message }) {
  return (
    <div className="coming-soon-banner">
      ⚠️ {message || "DOKO Battlefield is in development. This is a preview site. Not all features are active."}
    </div>
  );
}

