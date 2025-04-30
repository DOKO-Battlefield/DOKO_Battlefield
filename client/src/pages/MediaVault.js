// src/pages/MediaVault.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MediaVault.css';
import ComingSoonBanner from '../components/ComingSoonBanner';

const MediaVault = () => {
  return (
    <div className="media-vault-container">
      <h1 className="vault-title">📁 DOKO Media Vault</h1>
      <p className="vault-intro">
      From action shots to personal highlight reels, DOKO Media Vault is where you’ll find everything captured from your battles and experiences.
      </p>

      <ComingSoonBanner message="Media access will be available at launch." />

      <div className="vault-grid">
        <div className="vault-card">
          <h2>📸 Gallery</h2>
          <p>See highlights from past events, training sessions, and community nights.</p>
          <Link to="/media/gallery" className="vault-link">View Gallery</Link>
        </div>

        <div className="vault-card">
          <h2>💬 Testimonials</h2>
          <p>Hear what guests are saying about their DOKO experience — in their own words.</p>
          <Link to="/media/testimonials" className="vault-link">Read Testimonials</Link>
        </div>

        <div className="vault-card">
          <h2>🔐 Your Visit</h2>
          <p>Log in or scan your QR code to access personal media from your session.</p>
          <Link to="/media/your-visit" className="vault-link">Access My Visit</Link>
        </div>
      </div>
    </div>
  );
};

export default MediaVault;
