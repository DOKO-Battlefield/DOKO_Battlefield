// src/components/Footer.js
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import api from '../utils/api';

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
            <a href="https://www.instagram.com/doko_battlefield/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@doko_battlefield" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://www.linkedin.com/company/doko-battlefield" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com/profile.php?id=61575929885729" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='footer-newsletter'>
        <h4>Stay in the Loop</h4>
        <form
  className="newsletter-form"
  onSubmit={async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    try {
    const response = await api.post('/api/newsletter', email);
    alert(response.data.message);
    e.target.reset();
  } catch (error) {
    console.error("Newsletter signup failed:", error);
    alert("Something went wrong. Please try again.");
  }
}}
>
  <input type="email" name="email" placeholder="Your email" required />
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

  