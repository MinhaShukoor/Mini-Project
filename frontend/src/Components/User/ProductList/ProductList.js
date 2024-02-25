import React from 'react'
import ProductItem from '../ProuctItem/ProductItem';

 
const ProductList = () => {
  // Example list of jewelry products
  const products = [
    { id: 1, name: 'Diamond Necklace', price: 5000, description: 'Beautiful diamond necklace', category: 'Necklaces', rating: 4 },
    { id: 2, name: 'Gold Ring', price: 1200, description: 'Classic gold ring', category: 'Rings', rating: 5 },
    { id: 3, name: 'Silver Bracelet', price: 800, description: 'Elegant silver bracelet', category: 'Bracelets', rating: 4.5 }
  ];

  return (
    <div>
      <h2>Jewelry</h2>
      <section>
        <h3>Necklaces</h3>
        <ul>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductList;

 

