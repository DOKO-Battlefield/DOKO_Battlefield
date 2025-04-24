// src/components/Footer.js
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand / Mission */}
        <div className="footer-brand">
          <h2>DOKO Battlefield</h2>
          <p>Where Combat Meets Culture & Innovation</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/membership">Membership</Link>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <h4>Stay in the Loop</h4>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Legal Links */}
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </div>

        {/* Bottom */}
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} DOKO Battlefield. All rights reserved.
        </div>

        <div className="footer-credit">
          Built by Treneese Johnson with 💻, 🎨, and 💜
        </div>
      </div>
    </footer>
  );
}

  