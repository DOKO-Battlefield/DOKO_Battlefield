// src/pages/FAQ.js
// import '../styles/FAQ.css';
// import { useEffect, useState } from 'react';
// import FAQAccordion from '../components/FAQAccordion';
// import api from '../utils/api';

// export default function FAQ() {
//   const [faqs, setFaqs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await api.get('/faqs');   // <-- Axios
//         setFaqs(Array.isArray(res.data) ? res.data : []);
//       } catch (e) {
//         setErr(e?.message || 'Failed to load FAQs');
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return (
//     <div className="faq-page">
//       <h1 className="faq-title">Frequently Asked Questions</h1>
//       {loading && <p className="faq-loading">Loading questions...</p>}
//       {err && <p className="faq-error">Error: {err}</p>}
//       {!loading && !err && faqs.length === 0 && <p className="faq-empty">No questions yet.</p>}
//       {!loading && !err && faqs.map(f => <FAQAccordion key={f.id} faq={f} />)}
//     </div>
//   );
// }
// src/pages/FAQ.js
import "../styles/FAQ.css";
import FAQAccordion from "../components/FAQAccordion";

export default function FAQ() {

  const faqs = [

    // DOKO GENERAL
    {
      id: 1,
      question: "What is DOKO Battlefield?",
      answer:
        "DOKO Battlefield is a modern combat sports experience that blends instructor-led training, physical gameplay, immersive environments, and future-facing technology. It’s designed to bring people together through challenge, culture, and movement — accessible to beginners and exciting for athletes."
    },
    {
      id: 2,
      question: "What makes DOKO different from other entertainment venues?",
      answer:
        "Unlike arcades, axe throwing, or paintball, DOKO combines structured combat sports, tech-enabled scoring, community-based experiences, and cinematic environments. It’s the first combat entertainment space built for everyday people — safe, guided, and culturally rich."
    },

    // POP-UP
    {
      id: 3,
      question: "What happens at the DOKO Pop-Up?",
      answer:
        "The pop-up is a sports-only preview event featuring fencing, kendo-style sword work, and archery. Guests rotate through small-group sessions with instructors, experience the DOKO atmosphere, and view concept previews of wearables, VR, and Feast Field."
    },
    {
      id: 4,
      question: "Is the pop-up safe?",
      answer:
        "Yes. Every session is supervised by trained instructors. Safety gear, rules, waivers, and protocols are built into the entire event. Ages 10+ may participate with parental guidance."
    },

    // PILOT
    {
      id: 5,
      question: "What is the Detroit Pilot?",
      answer:
        "The Detroit Pilot is a 8,000–12,000 sq ft mini-DOKO facility launching after the pop-up. It includes 3 core combat rooms, the Wearable System (Phase 1), Feast Field dining, and the Naqi VR training experience."
    },

    // FLAGSHIP
    {
      id: 6,
      question: "What is the flagship DOKO facility?",
      answer:
        "The flagship is a large-scale DOKO Battlefield arena with multiple combat rooms, advanced wearables, immersive VR integration, Feast Field, event spaces, leagues, tournaments, and full tech-powered scoring. It is designed for long-term scalability and national expansion."
    },

    // WEARABLES / TECH
    {
      id: 7,
      question: "Will DOKO have wearable sensors?",
      answer:
        "Yes. Our smart wearable system launches in the Detroit Pilot. It tracks impact zones, accuracy, speed, progression, and unlocks level-up moments after each session."
    },
    {
      id: 8,
      question: "Will wearables be available at the Pop-Up?",
      answer:
        "No. The pop-up is a sports-only event. Wearables debut in the Pilot after funding and facility buildout."
    },

    // NAQI VR
    {
      id: 9,
      question: "What is the Naqi VR game?",
      answer:
        "Naqi is DOKO’s VR combat training game — a rhythm-based movement system where players learn timing, form, and flow. It includes avatar selection, fighting styles, environments, and a training dojo. Naqi connects to future DOKO facilities for real-world progression."
    },
    {
      id: 10,
      question: "Is Naqi playable at the pop-up?",
      answer:
        "Not yet. Guests will see early concept footage and previews. The playable version launches in the Detroit Pilot."
    },

    // SAFETY & RULES
    {
      id: 11,
      question: "What ages can participate?",
      answer:
        "Ages 10+ can join combat activities with parental guidance. Some sports may require 14+ depending on instructor rules and equipment safety."
    },
    {
      id: 12,
      question: "Do I need experience?",
      answer:
        "No experience is required. All sports are beginner-friendly and led by certified instructors."
    },

    // PRICING
    {
      id: 13,
      question: "What does it cost to participate?",
      answer:
        "Pricing for the pop-up will be announced soon. Pilot and flagship pricing will include day passes, group rates, memberships, and corporate packages."
    },

    // PARTNERSHIPS
    {
      id: 14,
      question: "How can my company partner with DOKO?",
      answer:
        "We are currently seeking partners for venue space, sponsorships, combat instructors, brands, community groups, and event activations. Visit our Partners page or contact us to collaborate."
    },

    // INVESTORS
    {
      id: 15,
      question: "Is DOKO accepting investors?",
      answer:
        "Yes. We are currently raising funds for the Detroit Pilot and early tech development. Investors can request our deck and schedule a meeting through the Investors page."
    },

  ];

  return (
    <div className="faq-page">
      <h1 className="faq-title">DOKO Battlefield FAQ</h1>
      {faqs.map((f) => (
        <FAQAccordion key={f.id} faq={f} />
      ))}
    </div>
  );
}
