import React from "react";
import "../styles/Popup.css";

export default function PopUp() {
  return (
    <div className="popup-page">

      {/* HERO */}
      <section className="popup-hero">
        <h1>DOKO Battlefield Pop-Up</h1>
        <p>
          A high-energy, sports-only preview of DOKO Battlefield —
          giving Detroit its first taste of modern combat entertainment.
        </p>
      </section>

      {/* WHAT GUESTS EXPERIENCE */}
      <section className="popup-section">
        <h2>What Guests Experience</h2>
        <ul>
          <li>
            <strong>Combat Training Rooms (3 Sports)</strong> — Instructor-led
            beginner sessions in:
            <br />• Kendo-style sword work  
            • Olympic-style fencing  
            • Precision archery
          </li>

          <li>
            <strong>Structured Rounds & Friendly Competition</strong> —
            Timed rotations, simple scoring, and a smooth guest flow.
          </li>

          <li>
            <strong>Atmosphere & Media</strong> —
            Lighting, music, and branded photo moments for shareable content.
          </li>

          <li>
            <strong>Future Sneak Peeks</strong> —
            Concept art + video previews of:
            <br />• Smart wearables  
            • Naqi VR combat game  
            • Feast Field culinary zone  
            (full features coming in the Detroit Pilot)
          </li>
        </ul>
      </section>

      {/* GOALS OF THIS POP-UP */}
      <section className="popup-section">
        <h2>Why This Pop-Up Matters</h2>
        <p>
          This pop-up is Phase Zero — our chance to gather real demand, test
          operations, and showcase the core feeling of DOKO before the Detroit
          Pilot. All revenue and data from this pop-up go toward building the
          full DOKO Battlefield ecosystem.
        </p>

        <ul>
          <li><strong>Validate pricing, demand, and session structure</strong></li>
          <li><strong>Collect customer feedback & email signups</strong></li>
          <li><strong>Strengthen partnerships with local combat instructors</strong></li>
          <li><strong>Demonstrate traction for investors</strong></li>
        </ul>
      </section>

      {/* WHAT’S INCLUDED + WHAT’S NOT */}
      <section className="popup-section">
        <h2>What’s Included</h2>
        <ul>
          <li>3 combat sports (fencing, kendo, archery)</li>
          <li>Professional instructors</li>
          <li>Safe, controlled training sessions</li>
          <li>Branded media moments</li>
          <li>Concept previews of DOKO’s future</li>
        </ul>

        <h2>What’s Not Included (Yet)</h2>
        <ul>
          <li>Smart wearable technology</li>
          <li>Feast Field dining experience</li>
          <li>Naqi VR training/gameplay</li>
        </ul>

        <p className="note">
          These features launch in the <strong>Detroit Pilot</strong> (Phase 1).
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="popup-cta">
        <h2>Want to Partner or Sponsor?</h2>
        <p>
          We’re securing partners, venues, and early supporters now.
          Let’s build Detroit’s newest sports + entertainment experience.
        </p>
        <a className="popup-button" href="/partners/contact-form">
          Contact Us
        </a>
      </section>

    </div>
  );
}
