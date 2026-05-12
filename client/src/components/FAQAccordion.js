// src/components/FAQAccordion.js
import { useState } from 'react';
import '../styles/FAQAccordion.css';

export default function FAQAccordion({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-card">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <h3 className="faq-question-header">{faq.question}</h3>
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </div>

      {open && (
        <div className="faq-body">
          <p className="faq-answer">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
