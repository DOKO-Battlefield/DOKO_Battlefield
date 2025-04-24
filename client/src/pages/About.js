// src/pages/About.js
import '../styles/About.css';

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About DOKO Battlefield</h1>

        <p className="about-text">
          <strong>DOKO Battlefield</strong> is more than an entertainment venue — it's a tech-powered combat experience where movement, story, and identity collide. 
          Every inch of our world is crafted to awaken the warrior within, celebrate cultural legacy, and reimagine what immersive recreation can look like.
        </p>

        <p className="about-text">
          Founded by <span className="highlight">Treneese Johnson</span> — a filmmaker, fine artist, engineer, and visionary — DOKO was born from a desire to blend 
          physical adrenaline with purpose, style, and belonging. It’s a space built for those who’ve never quite seen themselves in traditional sports, games, or arenas.
        </p>

        <p className="about-text">
          Inside our Japanese-inspired realms, you’ll find archery, dagger throwing, fencing, axe throwing, kendo, and team-based missions — all enhanced by 
          custom-designed smart wearables that buzz, glow, and link you to your media vault. Every battle you fight is recorded. Every moment is yours to relive.
        </p>

        <p className="about-text">
          Whether you're a first-timer or a lifelong competitor, DOKO offers a space where you don’t just train — you transform. It’s for solo warriors, teams, families, 
          youth orgs, schools, athletes, and artists alike. If you believe in boldness, culture, and innovation — you belong here.
        </p>

        <p className="about-text">
          DOKO isn’t just a place to play. It’s a brand. A movement. A future.
        </p>

        <div className="about-values">
          <h2 className="values-title">What We Value</h2>
          <ul className="values-list">
            <li>✨ Innovation — through tech, movement, and immersive design</li>
            <li>💪🏾 Empowerment — especially for Black, Brown, and underserved communities</li>
            <li>🎨 Artistry — from the walls to the weapons to the experience flow</li>
            <li>🛡️ Safety & Strength — mentally, physically, spiritually</li>
            <li>🌍 Community — across age, faith, ability, and identity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

  