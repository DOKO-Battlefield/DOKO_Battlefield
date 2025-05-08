// src/components/TeamAndAdvisors.js
import React from 'react';
import '../styles/TeamAndAdvisors.css';

const TeamAndAdvisors = () => {
  return (
    <div className="investor-page">
      <h1>Meet the Founder</h1>
      <div className="team-card solo">
        <img src="/Treneese.png" alt="Treneese Johnson" className="team-photo" />
        <h3>Treneese Johnson</h3>
        <p><strong>Founder & CEO</strong></p>
        <p>
          Treneese Johnson is an artist, filmmaker, software engineer, and visionary behind DOKO Battlefield. 
          With over 10 years of experience in storytelling, visual arts, and immersive media, she blends culture, combat sports, and technology to build meaningful experiences.
          A graduate of Clark Atlanta University with a B.A. in Mass Media Arts and a certified full-stack engineer through Flatiron School, 
          Treneese’s mission is to create culturally grounded, tech-forward spaces for community, creativity, and empowerment. 
          Her work spans VR game development, interactive museum concepts, and software that merges art and functionality. 
          As a mother, founder, and faith-centered creator, she builds with legacy, equity, and impact at the core.
        </p>
      </div>
    </div>
  );
};

export default TeamAndAdvisors;

