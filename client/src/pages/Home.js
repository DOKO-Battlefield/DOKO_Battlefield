// src/pages/Home.js
import { Link } from 'react-router-dom'
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home">

      {/* Hero Banner */}
<section className="hero">
  <h1 className="hero-title">Welcome to DOKO Battlefield</h1>
  <p className="hero-subtitle">
    Where combat becomes culture.  
    Step into a tech-powered world of tradition, innovation, and community.  
  </p>
  <Link to="/events" className="hero-button">
    Explore Upcoming Events
  </Link>
</section>

{/* What is DOKO? */}
<section className="about">
  <h2 className="section-title">What is DOKO?</h2>
  <p className="section-text">
    DOKO Battlefield is a one-of-a-kind combat sports and immersive experience space.  
    Here, your tech wearable isn’t just a line pass — it’s your identity.  
    Train in ancient warrior arts, compete in themed arenas, and collect your journey through personalized media.  
    This is where strength, strategy, and story collide.
  </p>
</section>


      {/* Featured Sections */}
      <section className="features">
        <div className="features-grid">
          <Link to="/menu" className="feature-box">
            <h3>Food & Drink</h3>
            <p>Refuel at Turf Grill & Warrior Bar</p>
          </Link>
          <Link to="/media" className="feature-box">
            <h3>Your Media</h3>
            <p>View and download saved photos/videos</p>
          </Link>
          <Link to="/reviews" className="feature-box">
            <h3>Community Reviews</h3>
            <p>See what other players are saying</p>
          </Link>
          <Link to="/membership" className="feature-box">
            <h3>Memberships & Specials</h3>
            <p>Join the DOKO elite</p>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="how-grid">
          <div className="how-step">
            <h3>1. Check In</h3>
            <p>Fill out the tablet form & receive your smart necklace.</p>
          </div>
          <div className="how-step">
            <h3>2. Track & Play</h3>
            <p>Use the necklace to track queue position, colors, & buzz alerts.</p>
          </div>
          <div className="how-step">
            <h3>3. Unlock & Save</h3>
            <p>Earn media, complete challenges, and save it all to your account.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} DOKO Battlefield. Built with power + purpose 💜
      </footer>
    </div>
  )
}