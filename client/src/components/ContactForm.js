// src/components/PartnerContactForm.js
import React, { useState } from 'react';
import '../styles/PartnerContactForm.css';
import api from '../utils/api';

const PartnerContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/api/contact', form);
      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div className="partner-page">
      <h1>📬 Get in Touch</h1>
      <p>If you're interested in working with DOKO Battlefield, send us a message and our team will follow up within 48 hours.</p>

      {submitted ? (
        <p className="confirmation">✅ Thank you! We'll be in touch soon.</p>
      ) : (
        <form className="partner-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input name="email" placeholder="Your Email" type="email" value={form.email} onChange={handleChange} required />
          <input name="organization" placeholder="Organization / Brand" value={form.organization} onChange={handleChange} />
          <textarea name="message" placeholder="Tell us a little about your idea..." rows="6" value={form.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default PartnerContactForm;
