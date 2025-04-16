// src/components/ReviewCard.js
import '../styles/ReviewCard.css';

export default function ReviewCard({ review }) {
  const stars = '⭐'.repeat(review.rating);

  return (
    <div className="review-card">
      <div className="review-header">
        <h3 className="review-username">{review.username}</h3>
        <span className="review-stars">{stars}</span>
      </div>
      <p className="review-room">{review.room}</p>
      <p className="review-comment">{review.comment}</p>
      <p className="review-date">
        {new Date(review.timestamp).toLocaleString()}
      </p>
    </div>
  );
}
  