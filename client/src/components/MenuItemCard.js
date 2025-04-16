// src/components/MenuItemCard.js
import '../styles/MenuItemCard.css';
import React from 'react'

export default function MenuItemCard({ item }) {
  return (
    <div className="menu-card">
      <h3 className="menu-item-name">{item.item_name}</h3>
      <p className="menu-restaurant">{item.restaurant_name}</p>
      <p className="menu-description">{item.description}</p>
      <p className="menu-price">${item.price.toFixed(2)}</p>
    </div>
  );
}
