// src/pages/Restaurants.js
import { Link } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';

const restaurantData = [
  {
    name: 'DOKO Feast Field',
    description: 'Luxury picnic experience with grill stations and fresh-prepared boards.',
    link: '/restaurants/feast-field',
    menuLink: '/menu/feast-field'
  },
  {
    name: 'DOKOYonies',
    description: 'Modern cultural comfort food in a refined indoor space.',
    link: '/restaurants/dokoyonies',
    menuLink: '/menu/dokoyonies'
  },
  {
    name: 'DOKO Bar',
    description: 'Signature mocktails and cultural beverages with a nightlife vibe.',
    link: '/restaurants/bar',
    menuLink: '/menu/bar'
  }
];

export default function Restaurants() {
  return (
    <div className="restaurants-page">
      <h1>🍽️ Explore DOKO Dining</h1>
      <div className="restaurant-list">
        {restaurantData.map((restaurant, index) => (
          <Link key={index} to={restaurant.link}>
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}
