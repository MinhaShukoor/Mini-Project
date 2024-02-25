import React from 'react'
import { Link } from 'react-router-dom';


const ProductItem = ({ product }) => {
// ProductItem.js


  const { id, name, price, description} = product;

  return (
    <li key={id}>
      <div>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <Link to={`/product/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </li>
  );
};


export default ProductItem;



