import  React,{ useState } from 'react';
import './uerlist.css'

const customersData = [
  { id: 1, name: 'Mary Smith', email: 'mary@example.com' },
  { id: 2, name: 'Emily Johnson', email: 'emily@example.com' },
  { id: 3, name: 'Sarah Williams', email: 'sarah@example.com' },
  { id: 4, name: 'Jessica Brown', email: 'jessica@example.com' },
  { id: 5, name: 'Lauren Davis', email: 'lauren@example.com' }
];


const Userlist = () => {
  return (
    <div className="admin-page"> 
      <h2 className='customers'> Customers</h2>
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
    <div>
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
    </div>
  );
};


export default Userlist


