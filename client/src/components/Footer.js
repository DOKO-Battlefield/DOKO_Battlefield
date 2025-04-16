// src/components/Footer.js
import '../styles/Footer.css';
export default function Footer() {
    return (
      <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} DOKO Battlefield. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
          <a href="/membership">Membership</a>
          <a href="/reviews">Reviews</a>
        </div>
        <div className="footer-credit">
          Built by Treneese Johnson with 💻, 🎨, and 💜
        </div>
      </div>
    </footer>
  );
}

  