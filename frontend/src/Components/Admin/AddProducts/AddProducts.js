// AddProductPage.js

import React, { useState } from 'react';
import './addproducts.css'; // Import CSS file

const AddProducts = () => {
  // Define state for form inputs
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form validation
    if (!name || !price || !image) {
      alert('Please fill in all fields');
      return;
    }
    // Prepare product data to send to backend or handle as needed
    const productData = {
      name,
      price,
      image
    };
    // Reset form fields
    setName('');
    setPrice('');
    setImage(null);
    // Send product data to backend or handle as needed
    console.log('Product data:', productData);
  };

  // Handle image selection
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts
