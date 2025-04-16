// src/components/MembershipCard.js
import '../styles/MembershipCard.css';

export default function MembershipCard({ plan }) {
  return (
    <div className="membership-card">
      <h3 className="membership-name">{plan.name}</h3>
      <p className="membership-price">{plan.price}</p>
      <ul className="membership-perks">
        {plan.perks.map((perk, idx) => (
          <li key={idx}>✔️ {perk}</li>
        ))}
      </ul>
      <button className="membership-button">
        {plan.price === 'Free' ? 'Get Started' : 'Join Now'}
      </button>
    </div>
  );
}
  