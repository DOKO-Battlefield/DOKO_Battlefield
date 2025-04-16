// src/pages/FAQ.js
import '../styles/FAQ.css';
import { useEffect, useState } from 'react'
import FAQAccordion from '../components/FAQAccordion'

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/faqs')
      .then(res => res.json())
      .then(data => setFaqs(data));
  }, []);

  return (
    <div className="faq-page">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqs.length > 0 ? (
        faqs.map(faq => <FAQAccordion key={faq.id} faq={faq} />)
      ) : (
        <p className="faq-loading">Loading questions...</p>
      )}
    </div>
  );
}