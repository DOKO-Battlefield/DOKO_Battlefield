// src/pages/Profile.js
import { useEffect, useState } from 'react'
import '../styles/Profile.css';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = 1; // 🔐 Replace with actual auth logic
    fetch(`http://localhost:5000/profile/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Failed to load profile:", err));
  }, []);

  if (!user) {
    return <p className="profile-loading">Loading profile...</p>;
  }

  return (
    <div className="profile-page">
      <h1 className="profile-title">My Profile</h1>

      <div className="profile-card">
        <img
          src={user.image || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="profile-img"
        />
        <h2 className="profile-name">{user.username}</h2>
        <p className="profile-email">{user.email}</p>
        <p className="profile-membership">
          Membership: {user.membership}
        </p>
        <p className="profile-media">
          Media Saved: {user.media_count}
        </p>

        <div className="profile-qr">
          <h3>QR Code</h3>
          <p>{user.qr_code}</p>
        </div>

        <a href="/media" className="profile-link">
          View My Media
        </a>
      </div>
    </div>
  );
}