import React, { useState } from 'react';
import './adminuerlist.css'

const customersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

const AdminUserlist = () => {
  return (
    <div className="admin-page"> 
      <h2>Admin Customers Page</h2>
      <CustomersTable customers={customersData} />
    </div>
  );
};

const CustomersTable = ({ customers }) => {
  const [blockedCustomers, setBlockedCustomers] = useState([]);

  const blockCustomer = (customerId) => {
    setBlockedCustomers([...blockedCustomers, customerId]);
  };

  return (
    <table className="customers-table"> 
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>
              <button
                onClick={() => blockCustomer(customer.id)}
                disabled={blockedCustomers.includes(customer.id)}
                className="block-button" 
              >
                Block
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminUserlist



