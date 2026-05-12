// src/pages/SupportOpportunities.js
import "../styles/SupportOpportunities.css";

export default function SupportOpportunities() {
  return (
    <div className="support-page">
      <h1>🏟️ Pop-Up & Pilot Support Opportunities</h1>

      <p>
        As DOKO Battlefield prepares for the Detroit Pop-Up and builds toward 
        the Detroit Pilot, we’re partnering with organizations who want to be 
        part of the foundation of this movement.
      </p>

      <div className="support-sections">

        <section className="support-section">
          <h2>📍 Venue Partners</h2>
          <p>
            We’re securing indoor space for the DOKO Pop-Up and long-term 
            partners for the Detroit Pilot facility.
          </p>
        </section>

        <section className="support-section">
          <h2>🗡️ Combat & Movement Instructors</h2>
          <p>
            Fencing coaches, kendo practitioners, archery instructors, 
            safety coordinators, and movement educators are needed for 
            pop-up rotations and pilot training rooms.
          </p>
        </section>

        <section className="support-section">
          <h2>🤝 Sponsors & Brand Partners</h2>
          <p>
            From apparel to drinks to tech — we’re collaborating with brands 
            aligned with empowerment, culture, and innovation.
          </p>
        </section>

        <section className="support-section">
          <h2>🏫 Schools & Youth Programs</h2>
          <p>
            Partner with us for safe, guided combat sports experiences, 
            field trips, and youth-focused programming.
          </p>
        </section>

        <section className="support-section">
          <h2>📣 Media & Creators</h2>
          <p>
            We welcome early media partners, photographers, videographers, 
            and creators interested in documenting the journey.
          </p>
        </section>

      </div>

      <a href="/partners/contact-form" className="support-button">
        Contact Us to Partner
      </a>
    </div>
  );
}
