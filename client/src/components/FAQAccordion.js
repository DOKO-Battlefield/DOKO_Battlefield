// src/components/FAQAccordion.js
import { useState } from 'react'
import '../styles/FAQAccordion.css';

export default function FAQAccordion({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-card">
      <div className="faq-header" onClick={() => setOpen(!open)}>
        <div>
          <h3 className="faq-title">{faq.title}</h3>
          <p className="faq-category">{faq.category}</p>
        </div>
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </div>

      {open && (
        <div className="faq-body">
          <p className="faq-question">{faq.question}</p>
          <p className="faq-answer">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
