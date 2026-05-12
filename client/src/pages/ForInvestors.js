// src/pages/ForInvestors.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForInvestors.css';

const ForInvestors = () => {
  return (
    <div className="investors-container">
      <h1>💼 For Investors</h1>
      // only change the paragraph
<p className="investors-intro">
  Welcome to the DOKO Battlefield investor portal. Here you'll find the materials, insights,
  and documentation that showcase the vision, traction, and return potential of DOKO—from our
  first pop-up and Detroit pilot to the flagship Atlanta arena and beyond.
</p>


      <div className="investor-grid">
        <div className="investor-card">
          <h2>📽️ Pitch Deck & Vision</h2>
          <p>See what DOKO is, who it’s for, and where we’re headed.</p>
          <Link to="/investors/pitch" className="investor-link">View Deck & Vision</Link>
        </div>

        <div className="investor-card">
          <h2>📊 Financial Projections</h2>
          <p>Review break-even timelines, revenue forecasts, and funding use breakdowns.</p>
          <Link to="/investors/financials" className="investor-link">View Financials</Link>
        </div>

        {/* <div className="investor-card">
          <h2>👥 Team & Advisors</h2>
          <p>Meet the creators, leaders, and mentors behind DOKO’s success.</p>
          <Link to="/investors/team" className="investor-link">Meet the Team</Link>
        </div> */}

        <div className="investor-card">
          <h2>🛣️ Roadmap</h2>
          <p>Explore our launch plan, expansion phases, and major milestones.</p>
          <Link to="/investors/roadmap" className="investor-link">Explore Roadmap</Link>
        </div>

        <div className="investor-card">
          <h2>📎 Download Materials</h2>
          <p>Access downloadable PDFs, one-pagers, and the founder letter.</p>
          <Link to="/investors/downloads" className="investor-link">Go to Downloads</Link>
        </div>
      </div>
    </div>
  );
};

export default ForInvestors;
