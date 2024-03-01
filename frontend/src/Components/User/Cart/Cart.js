import React, { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);

  const addItem = (quantity, price) => {
    const newItem = { quantity, price };
    setItems([...items, newItem]);
  };

  const removeItem = () => {
    const newItems = [...items];
    newItems.pop();
    setItems(newItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is currently empty</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <p>Quantity: {item.quantity}, Price: ${item.price}</p>
            </div>
          ))}
          <p>Total Price: ${items.reduce((acc, item) => acc + item.quantity * item.price, 0)}</p>
          <button onClick={removeItem}>Remove Item</button>
        </div>
      )}
    </div>
  );
}

export default Cart;


