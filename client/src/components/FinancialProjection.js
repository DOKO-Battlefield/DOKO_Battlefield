// src/components/FinancialProjection.js
import React from 'react';

const FinancialProjection = () => {
  return (
    <div className="investor-page">
      <h1>📊 Financial Projections</h1>
      <p>
        Our projections reflect the capital needed to build the flagship Atlanta arena, run the
        Detroit pilot, and grow DOKO Battlefield over the next 5 years.
      </p>

      <ul>
        <li><strong>Total Startup Funding Needed (Flagship):</strong> $49.8M</li>
        <li><strong>Detroit Pilot Budget:</strong> $2.75M (including Naqi MVP + smart wearables)</li>
        <li><strong>Break-Even Timeline:</strong> Around Year 2, Q3 from flagship launch</li>
        <li><strong>Year 5 Projected Profit:</strong> $18M+</li>
        <li>
          <strong>Revenue Streams:</strong> Memberships, Activity Fees, Restaurants, Event Rentals,
          Merchandise
        </li>
      </ul>

      <p>
        For full financial documents and scenario modeling, request the detailed forecast at{' '}
        <strong>finance@dokobattlefield.com</strong>.
      </p>
    </div>
  );
};

export default FinancialProjection;

