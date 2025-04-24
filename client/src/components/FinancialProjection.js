// src/components/FinancialProjection.js
import React from 'react';

const FinancialProjection = () => {
  return (
    <div className="investor-page">
      <h1>📊 Financial Projections</h1>
      <p>
        Our projections reflect the capital needed to build the flagship Atlanta location, launch operations, and grow over the next 5 years.
      </p>

      <ul>
        <li><strong>Startup Funding Needed:</strong> $49.8M</li>
        <li><strong>Break-Even Timeline:</strong> Year 2, Q3</li>
        <li><strong>Year 5 Projected Profit:</strong> $18M+</li>
        <li><strong>Revenue Streams:</strong> Memberships, Activity Fees, Restaurants, Event Rentals, Merchandise</li>
      </ul>

      <p>
        For full financial documents and scenario modeling, request the detailed forecast at <strong>finance@dokobattlefield.com</strong>
      </p>
    </div>
  );
};

export default FinancialProjection;
