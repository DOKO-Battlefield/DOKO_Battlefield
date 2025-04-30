// src/components/RestaurantCard.js
import { Link } from 'react-router-dom';
import '../styles/RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
    </div>
  );
};

export default RestaurantCard;
