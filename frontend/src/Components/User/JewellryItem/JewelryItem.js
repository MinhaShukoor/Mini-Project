import React from 'react';


function JewelryItem({ name, price }) {
    const handleAddToCart = () => {
        // Implement your add to cart logic here
        console.log(`Added ${name} to cart`);
      };
    
  return (
    <div className="jewelryItem">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    
    </div>
  )
}

export default JewelryItem
