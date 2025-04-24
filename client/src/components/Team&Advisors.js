// src/components/TeamAndAdvisors.js
import React from 'react';

const team = [
  {
    name: 'Treneese Johnson',
    role: 'Founder & CEO',
    bio: 'Artist, filmmaker, engineer. Visionary behind DOKO Battlefield. 10+ years in art & storytelling, software engineering, and immersive media.',
  },
  {
    name: 'Mentor TBD',
    role: 'Advisor – Cultural Strategy',
    bio: 'Historian and spiritual advisor specializing in Black cultural heritage, traditions, and rites of passage.',
  },
  {
    name: 'Mentor TBD',
    role: 'Advisor – Tech/VR',
    bio: 'Expert in immersive environments, Unity/Unreal development, and virtual combat systems.',
  },
  {
    name: 'Mentor TBD',
    role: 'Advisor – Business/Funding',
    bio: 'Experienced in launching experiential businesses, raising capital, and creating community-based monetization models.',
  },
];

const TeamAndAdvisors = () => {
  return (
    <div className="investor-page">
      <h1>👥 Team & Advisors</h1>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <h3>{member.name}</h3>
            <p><strong>{member.role}</strong></p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAndAdvisors;
