// src/pages/Restaurants.js
import { Link } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';
import '../styles/Restaurants.css';


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
    description: ' Electrolyte-powered drinks inspired by global cultures — crafted for recovery, energy, and celebration.',
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
