import React from 'react'
import './MenuSec.css';

const categories = [
    { name: 'Grocery', imgSrc: 'path_to_grocery_image' },
    { name: 'Mobiles', imgSrc: 'path_to_mobiles_image' },
    { name: 'Fashion', imgSrc: 'path_to_fashion_image' },
    { name: 'Electronics', imgSrc: 'path_to_electronics_image' },
    { name: 'Home & Furniture', imgSrc: 'path_to_home_furniture_image' },
    { name: 'Appliances', imgSrc: 'path_to_appliances_image' },
    { name: 'Travel', imgSrc: 'path_to_travel_image' },
    { name: 'Beauty, Toys & More', imgSrc: 'path_to_beauty_toys_image' },
    { name: 'Two Wheelers', imgSrc: 'path_to_two_wheelers_image' },
  ];
  
  function MenuSec() {
    return (
      <div className="category-bar">
        {categories.map((category) => (
          <div className="category-item" key={category.name}>
            <img src={category.imgSrc} alt={category.name} className="category-image" />
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    );
  }

export default MenuSec