


// import React, { useState, useEffect } from 'react';
// import './adminproduct.css'

// import { Link } from 'react-router-dom'; 

// const AdminProduct = () => {
//   const [products, setProducts] = useState([]);

//   const mockProducts = [
//     { id: 1, name: 'Product 1', price: 20, image: 'Necklace7.png' },
//     { id: 2, name: 'Product 2', price: 30, image:'Necklace7.png' },
//     { id: 3, name: 'Product 3', price: 25, image: 'Necklace7.png' },
//     { id: 4, name: 'Product 4', price: 15, image: 'product4.jpg' },
//     { id: 5, name: 'Product 5', price: 40, image: 'product5.jpg' }
//   ];


//   useEffect(() => {
//     setTimeout(() => {
//       setProducts(mockProducts);
//     }, 1000);
//   }, []);

//   return (
//     <div className="product-list">
//       <h1>Product List</h1>
//       <a href ='/addproducts' className="add-product-link">Add Product</a>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <div className="product-details">
//               <strong>{product.name}</strong> - ${product.price}
//               <div className="product-actions">
//                 <Link to={`/admin/products/edit/${product.id}`} className="edit-product-link">Edit</Link>
//                 <button className="delete-product-button">Delete</button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminProduct

import React, { useState } from 'react';
import './products.css'

const Products = ({ onDelete }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'EL SOL NECKLACE',
      imageUrl: '/Necklace1.PNG',
      price: '$20.00 USD'
    },
    {
        id: 2,
        name: 'MARINER INITIAL ',
        imageUrl: '/Necklace2.PNG',
        price: '$19.00 USD'
      }, {
        id: 3,
        name: 'ZENIA NECKLACE',
        imageUrl: '/Necklace5.PNG',
        price: '$22.00 USD'
      }, {
        id: 4,
        name: 'DAINTY NECKLACE',
        imageUrl: '/Necklace4.PNG',
        price: '$18.00 USD'
      }, {
        id: 5,
        name: 'EVERMORE NECKLACE',
        imageUrl: '/Necklace3.PNG',
        price: '$23.00 USD'
      },
      {
        id: 6,
        name: 'MYSTERY NECKLACE',
        imageUrl: '/Necklace7.png',
        price: '$24.00 USD'
      },{
        id: 7,
        name: 'DOT BUTTERFLY',
        imageUrl: '/Necklace9.png',
        price: '$16.00 USD'
      },{
        id: 8,
        name: 'PEARLY TEDDY',
        imageUrl: '/Necklace8.png',
        price: '$17.00 USD'
      },{
        id: 9,
        name: 'SPIRAL NECKLACE',
        imageUrl: '/Necklace6.png',
        price: '$27.00 USD'
      },{
        id: 10,
        name: 'SNAKE CHARM',
        imageUrl: '/Necklace10.png',
        price: '$25.00 USD'
      },
  
  ]);

  const handleDelete = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };



 
  return (
    <div className='body-PRODUCTS'>
<h1 className='products-head'>Products</h1>
    <div className="item-container-PRODUCTS">
      {products.map(product => (
       <div key={product.id} className="item">
       <img src={product.imageUrl} alt={product.name} />
       <h3>{product.name}</h3>
       <p>{product.description}</p>
       <p> {product.price}</p>
            <button onClick={() => handleDelete(product.id)} className="delete-button">Disable</button>
          </div>
      ))}
    </div>
    
    </div>
  );
};

export default Products;

