// src/pages/Restaurants.js
import { useEffect, useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

//   const restaurants = [
//     {
//       name: 'Old School',
//       type: 'Restaurant',
//       price: '$$'
//     },
//     {
//       name: 'DOKOyanies',
//       type: 'Restaurant',
//       price: '$$$'
//     },
//     {
//       name: 'Warrior Bar',
//       type: 'Bar',
//       price: '$$'
//     }
//   ];

  useEffect(() => {
    fetch('http://localhost:5000/menu-items')
      .then(res => res.json())
      .then(data => {
        // Group by restaurant_name
        const grouped = {};
        data.forEach(item => {
          if (!grouped[item.restaurant_name]) {
            grouped[item.restaurant_name] = {
              name: item.restaurant_name,
              items: []
            };
          }
          grouped[item.restaurant_name].items.push(item);
        });

        // Convert to array and set state
        const restaurantArray = Object.values(grouped);
        setRestaurants(restaurantArray);
      });
  }, []);

  return (
    <div className="restaurants-page">
      <h1>Our Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

