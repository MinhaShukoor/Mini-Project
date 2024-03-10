// Wishlist.js
import React from 'react';

const Wishlist = ({ items }) => {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
