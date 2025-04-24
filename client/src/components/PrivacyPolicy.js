// src/pages/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Privacy Policy</h1>
      <p>
        DOKO Battlefield values your privacy. This policy outlines how we collect, use, and protect your information when you visit our website or use our services.
      </p>

      <h3>1. Information We Collect</h3>
      <ul>
        <li>Basic contact details submitted via forms (name, email, etc.)</li>
        <li>Media associated with your QR-linked visits</li>
        <li>Analytics data (via cookies or tools like Google Analytics)</li>
      </ul>

      <h3>2. How We Use It</h3>
      <ul>
        <li>To personalize your experience and access your media</li>
        <li>To contact you with updates, offers, or event confirmations</li>
        <li>To improve our services based on user behavior and feedback</li>
      </ul>

      <h3>3. Data Sharing</h3>
      <p>
        We do not sell or rent your personal data. Third-party services we use (like payment processors or analytics tools) may have access only as needed to perform their tasks.
      </p>

      <h3>4. Your Rights</h3>
      <p>
        You can request deletion or correction of your stored information by contacting us at <strong>privacy@dokobattlefield.com</strong>.
      </p>

      <h3>5. Updates</h3>
      <p>This policy may be updated periodically. Last updated: {new Date().toLocaleDateString()}.</p>
    </div>
  );
};

export default PrivacyPolicy;
