import React from 'react';

const DevelopersNotes = () => {
  return (
    <div className="dev-notes-container" style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>🛠️ Developer Notes</h1>
      <p>Follow our journey as we build Naqi Combat, the world’s first rhythm-fueled VR combat experience.</p>

      <section style={{ marginTop: '2rem' }}>
        <h3>🔹 April 2025</h3>
        <ul>
          <li>✅ Naqi arena layout complete in Unity</li>
          <li>✅ Added avatar selector system with mood-based reactions</li>
          <li>🧪 Working on stylized weapon animation previews</li>
          <li>🔧 Performance tweaks for Oculus Quest</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h3>🔹 Coming Soon</h3>
        <ul>
          <li>🎵 Rhythm sync combat loop</li>
          <li>🎮 Beta registration and early feedback portal</li>
          <li>💻 Demo page integration + downloadable trailer</li>
        </ul>
      </section>
    </div>
  );
};

export default DevelopersNotes;
