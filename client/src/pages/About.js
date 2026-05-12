// src/pages/About.js
import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">

        <h1 className="about-title">About DOKO Battlefield</h1>

        <p className="about-text">
          <strong>DOKO Battlefield</strong> is a modern combat sports experience
          designed to bring people together through movement, culture, and 
          innovation. We blend instructor-led training, cinematic atmosphere, 
          and future-facing technology to create a new category of
          sports-meets-entertainment.
        </p>

        <p className="about-text">
          Founded by <span className="highlight">Treneese Johnson</span> — a 
          visionary filmmaker, fine artist, and engineer — DOKO was created to
          give people an experience that feels powerful, safe, culturally-rooted,
          and accessible. It’s a space for those who’ve never quite seen 
          themselves represented in traditional sports or entertainment venues.
        </p>

        <p className="about-text">
          DOKO is built in phases. It begins with our 
          <strong> Detroit Pop-Up</strong> — a sports-only preview featuring
          fencing, kendo-inspired sword work, and archery. From there, we 
          transition into the <strong>Detroit Pilot</strong>, where we introduce 
          smart wearables, our Feast Field food experience, and the 
          <strong> Naqi VR training game</strong>. The long-term vision is the 
          <strong> flagship DOKO Battlefield arena</strong>, a fully immersive,
          multi-room combat world powered by technology, story, and community.
        </p>

        <p className="about-text">
          Whether you're a first-timer, a family looking for something new, a
          school, an athlete, or a curious explorer — DOKO is built for you.
          Every environment we create, every movement system we design, and 
          every experience we launch is grounded in connection, creativity, and
          purpose.
        </p>

        <p className="about-text">
          DOKO isn’t just a place to play.  
          <strong>It’s a brand. A movement. A future.</strong>
        </p>

        {/* VALUES */}
        <div className="about-values">
          <h2 className="values-title">Our Values</h2>
          <ul className="values-list">
            <li>✨ <strong>Innovation</strong> — through tech, movement, and immersive design</li>
            <li>💪🏾 <strong>Empowerment</strong> — especially for Black, Brown & underserved communities</li>
            <li>🎨 <strong>Artistry</strong> — in how we build, design, and present experiences</li>
            <li>🛡️ <strong>Safety</strong> — physical, mental, and emotional</li>
            <li>🌍 <strong>Community</strong> — across age, faith, ability, and identity</li>
          </ul>
        </div>

      </div>
    </div>
  );
}


  