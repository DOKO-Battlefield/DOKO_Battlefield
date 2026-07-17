import React, { useState } from "react";
import "../styles/Popup.css";
import api from '../utils/api';

export default function PopUp() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="popup-page postponed-view">
      {/* URGENT STATUS BANNER */}
      <div className="alert-banner">
        <h2>🚨 EVENT POSTPONED</h2>
        <p>Due to severe storms and hazardous air quality, tomorrow's event is postponed for public safety.</p>
      </div>

      <div className="postponed-container">
        {/* FLYER DISPLAY */}
        <div className="flyer-section">
          <img 
            src="/images/POSTPONED.png" 
            alt="DOKO Battlefield Pop-Up Postponed Flyer" 
            className="postponed-flyer"
          />
        </div>

        {/* SUBSCRIPTION & STATUS BOX */}
        <div className="update-section">
          <h1>We Will Keep You Updated</h1>
          <p className="status-text">
            Your safety is our top priority. We are actively monitoring the conditions and coordinating a new date for the <strong>DOKO Battlefield Pop-Up Experience</strong>.
          </p>

          <div className="subscribe-box">
            <h3>Want to be alerted when we have our new date?</h3>
            <p>Subscribe below to get the new schedule delivered directly to your inbox.</p>
            
            {!submitted ? (
              <form 
  className="subscribe-form" // Kept this class name to match the CSS we wrote
  onSubmit={async (e) => {
    e.preventDefault();
    
    // 1. Correctly extract email from the named input field
    const emailValue = e.target.elements.email.value; 
    
    try {
      // 2. Wrap the email in an object: { email: "user@example.com" }
      // Most REST APIs expect a JSON body object rather than a raw string.
      await api.post('/api/newsletter', { email: emailValue });
      
      // 3. Update state instead of using a disruptive alert popup
      setSubmitted(true); 
      e.target.reset();
    } catch (error) {
      console.error("Newsletter signup failed:", error);
      alert("Something went wrong. Please try again.");
    }
  }} 
>
  {/* Added name="email" to match your data fetching strategy */}
  <input 
    type="email" 
    name="email" 
    placeholder="Enter your email address" 
    required 
  />
  <button type="submit" className="subscribe-button">
    Notify Me
  </button>
</form>

            ) : (
              <div className="success-message">
                <p>✓ Thank you! We will alert you as soon as the new date is locked in.</p>
              </div>
            )}
          </div>
          
          <a href="/partners/contact-form" className="contact-link">
            Sponsors & Partners Contact Form →
          </a>
        </div>
      </div>
    </div>
  );
}

