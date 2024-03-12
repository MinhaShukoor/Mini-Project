
import React from 'react';
import './order.css';

const Orderlist = () => {
  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      totalPrice: 100,
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      totalPrice: 80,
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      totalPrice: 120,
    }
  ];

  return (
    <div className="admin-order-page">
      <h2 className='orders-head'>Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>${order.totalPrice}</td>
              <td>
                <button className="view-details-button">View Details</button>
                <button className="mark-as-shipped-button">Mark as Shipped</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orderlist;
