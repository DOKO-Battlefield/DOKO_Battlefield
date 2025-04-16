// src/pages/RestaurantMenu.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';

export default function RestaurantMenu() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/menu-items')
      .then(res => res.json())
      .then(data => {
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

        const restaurantArray = Object.values(grouped);
        setRestaurant(restaurantArray[parseInt(id)]);
      });
  }, [id]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      {restaurant.items.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
