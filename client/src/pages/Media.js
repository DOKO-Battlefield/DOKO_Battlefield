// src/pages/Media.js
import '../styles/Media.css';
import { useEffect, useState } from 'react'
import MediaCard from '../components/MediaCard'

export default function Media() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const qrCode = 'DOKO123-ALA'; // ← Replace with actual user QR later
    fetch(`http://localhost:5000/media/qr/${qrCode}`)
      .then(res => res.json())
      .then(data => setMedia(data))
      .catch(err => console.error("Failed to fetch media:", err));
  }, []);

  return (
    <div className="media-page">
      <h1 className="media-title">My DOKO Media</h1>
      {media.length > 0 ? (
        media.map(item => <MediaCard key={item.id} media={item} />)
      ) : (
        <p className="media-empty">No media found yet.</p>
      )}
    </div>
  );
}
