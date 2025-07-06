// src/pages/Home.js
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ComingSoonBanner from '../components/ComingSoonBanner'; // ✅ Make sure this exists

export default function Home() {
  return (
    <div className="home">

      {/* Hero Banner */}
      <section className="hero video-hero">
  <video autoPlay muted loop playsInline className="hero-video">
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="hero-overlay">
  <div className="logo">
        <img src="/DOKO_Battlefield.png" alt="Logo" className="logo-img" />
        {/* <h1 className="logo-text">DOKO</h1> */}
      </div>
    <h1 className="hero-title">Welcome to DOKO Battlefield</h1>
    <p className="hero-subtitle">
      Where combat becomes culture.<br />
      Step into a tech-powered world of sport, tradition, and transformation.
    </p>
    <Link to="/events" className="hero-button">
      Explore Upcoming Events
    </Link>
    <ComingSoonBanner  />
  </div>
</section>


      {/* What is DOKO? */}
      <section className="about">
        <h2 className="section-title">What is DOKO?</h2>
        <p className="section-text">
          <strong>DOKO Battlefield</strong> is a real-world arena where combat sports and immersive tech collide.  
          Guests train, compete, and enhance their journey with smart wearables that capture their highlights.
        </p>
        <p className="section-text">
          Designed for solo warriors, teams, families, and creatives — DOKO is a space for anyone seeking challenge, joy, and community.
        </p>
      </section>

      {/* Featured Sections */}
      <section className="features">
        <div className="features-grid">
          <Link to="/restaurants" className="feature-box">
            <h3>Food & Drink</h3>
            <p>Feast Field, Warrior Bar, and DOKOYonies</p>
          </Link>
          <Link to="/media" className="feature-box">
            <h3>Media Vault</h3>
            <p>Explore public galleries or log in to view your visit</p>
          </Link>
          <Link to="/media/testimonials" className="feature-box">
            <h3>Community Voices</h3>
            <p>Hear what others say about their time at DOKO</p>
          </Link>
          <Link to="/membership" className="feature-box">
            <h3>Memberships & Specials</h3>
            <p>Unlock perks, media access, and elite status</p>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <h3>1. Check In</h3>
            <p>Use our front tablet kiosk to register and receive your smart necklace.</p>
          </div>
          <div className="how-step">
            <h3>2. Enjoy Your Experience</h3>
            <p>Enter rooms, track queue status, and complete physical missions.</p>
          </div>
          <div className="how-step">
            <h3>3. Relive & Share</h3>
            <p>Access your photos, videos, and highlights from the day via your QR code.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <h2>Ready to Enter the Battlefield?</h2>
        <Link to="/experience" className="hero-button">Discover the Full Experience</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* &copy; {new Date().getFullYear()} DOKO Battlefield. Built with power + purpose 💜 */}
      </footer>
    </div>
  );
}
