// src/components/RestaurantCard.js
import { Link } from 'react-router-dom';
import '../styles/RestaurantCard.css';

export default function RestaurantCard({ restaurant, index }) {
    return (
      <div className="restaurant-card">
        <Link to={`/restaurants/${index}`}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.items.length} items</p>
        </Link>
      </div>
    );
  }
