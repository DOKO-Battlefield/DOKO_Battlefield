// src/components/MediaCard.js
import '../styles/MediaCard.css';

export default function MediaCard({ media }) {
    const date = new Date(media.timestamp).toLocaleString()
  
    return (
      <div className="border p-4 rounded-xl shadow-md bg-white mb-4 max-w-xl mx-auto">
        <h3 className="font-semibold mb-1">{media.room}</h3>
        {media.media_type === 'photo' ? (
          <img src={media.media_url} alt="DOKO Media" className="rounded w-full mb-2" />
        ) : (
          <video src={media.media_url} controls className="rounded w-full mb-2" />
        )}
        <p className="text-sm text-gray-500">Captured: {date}</p>
      </div>
    )
  }
  