// src/components/DownloadMaterials.js
import React from 'react';
import '../styles/Investor.css';

const DownloadMaterials = () => {
  return (
    <div className="investor-page">
      <h1>📎 Download Investor Materials</h1>
      <p>
        All essential documents for learning more about DOKO Battlefield, our founding story, our business model, and our financial forecast are available below.
      </p>

      <div className="download-list">
        <a
          href="/docs/DOKO_Pitch_Deck.pdf"
          download
          className="download-link"
        >
          📽️ DOKO Pitch Deck
        </a>

        <a
          href="/docs/DOKO_One_Pager.pdf"
          download
          className="download-link"
        >
          📄 DOKO One-Pager
        </a>

        <a
          href="/docs/Financial_Projections.pdf"
          download
          className="download-link"
        >
          📊 Financial Projections (2025–2029)
        </a>

        <a
          href="/docs/Founder_Vision_Letter.pdf"
          download
          className="download-link"
        >
          💌 Founder Vision Letter
        </a>
      </div>

      <p className="note">
        Need a personalized walk-through or data room access?  
        Email <strong>invest@dokobattlefield.com</strong>
      </p>
    </div>
  );
};

export default DownloadMaterials;
