// src/pages/Reviews.js
import { useEffect, useState } from 'react'
import ReviewCard from '../components/ReviewCard'
import '../styles/Reviews.css';
import api from '../utils/api';

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ username: '', room: '', rating: 5, comment: '' })

  useEffect(() => {
    api.get('/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.error('Error fetching reviews:', err));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post('/reviews', form);
    setReviews([...reviews, res.data]);
    setForm({ username: '', room: '', rating: 5, comment: '' });
  } catch (err) {
    console.error('Error submitting review:', err);
  }
};

  return (
    <div className="reviews-page">
      <h1 className="reviews-title">Community Reviews</h1>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="room"
          placeholder="Room Name (optional)"
          value={form.room}
          onChange={handleChange}
        />
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
        >
          {[5, 4, 3, 2, 1].map(n => (
            <option key={n} value={n}>
              {n} Stars
            </option>
          ))}
        </select>
        <textarea
          name="comment"
          placeholder="Your review..."
          value={form.comment}
          onChange={handleChange}
          required
        />
        <button type="submit">
          Submit Review
        </button>
      </form>

      {/* Reviews */}
      {reviews.length > 0 ? (
        reviews.map(review => <ReviewCard key={review.id} review={review} />)
      ) : (
        <p className="no-reviews">No reviews yet. Be the first!</p>
      )}
    </div>
  );
}