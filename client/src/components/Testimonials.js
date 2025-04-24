import { useEffect, useState } from 'react'
import ReviewCard from '../components/ReviewCard'
import '../styles/Reviews.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ username: '', room: '', rating: 5, comment: '' })

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(newReview => {
        setReviews([...reviews, newReview])
        setForm({ username: '', room: '', rating: 5, comment: '' })
      })
  }

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