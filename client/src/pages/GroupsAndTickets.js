// src/pages/GroupsAndTickets.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GroupsAndTickets.css';

const groupPackages = [
  {
    name: 'Family Pack',
    price: '$160 (4 people)',
    details: [
      '4 General Access Passes',
      '4 Training + Performance Room Credits',
      '2 Media Downloads',
      '10% off food & drinks for group',
      '10% off merch & gear'
    ]
  },
  {
    name: 'Warrior Pack',
    price: '$320 (8 people)',
    details: [
      '8 General Access Passes',
      '8 Training + Performance Room Credits',
      '4 Media Downloads',
      '$40 Food & Drink Credit',
      'Priority queue access for group'
    ]
  },
  {
    name: 'Custom Group Experience',
    price: 'Starting at $500+',
    details: [
      'Private event coordination (10+ guests)',
      'Custom Training + Performance Room Schedule',
      'Mini Tournaments or Team Challenges',
      'Group Media Package',
      'Optional catering, badges, gear add-ons',
      'Post-event celebration or lounge access'
    ],
    redirect: true
  }
];

export default function GroupsAndTickets() {
  const navigate = useNavigate();

  return (
    <div className="groups-page">
      <h1 className="groups-title">Group Packages & Ticket Options</h1>
      <p className="groups-subtext">
        Planning a team day, celebration, or squad challenge? Choose from our pre-made packs or build your own unforgettable experience.
      </p>
      <div className="groups-grid">
        {groupPackages.map((pkg) => (
          <div
            key={pkg.name}
            className="group-card"
            onClick={() => pkg.redirect && navigate('/custom-booking')}
            style={{ cursor: pkg.redirect ? 'pointer' : 'default' }}
          >
            <h2 className="group-name">{pkg.name}</h2>
            <p className="group-price">{pkg.price}</p>
            <ul className="group-details">
              {pkg.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

