import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import HomePage from '../Pages/Admin/HomePage';
import Userlistpage from '../Pages/Admin/Userlistpage';
import ProductListPage from '../Pages/Admin/ProductListPage';
// import AdminAddProductsPage from '../Pages/Admin/AdminAddProductsPage';
import Orderpage from '../Pages/Admin/Orderpage';
import Dashboard from '../Pages/Admin/Dashboard';



const Admin = () => {
  return (
    <div>
      
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/cutomers" element={<Userlistpage/>} />
        <Route path="/products" element={<ProductListPage/>} />
        {/* <Route path="/addproducts" element={<AdminAddProductsPage/>} /> */}
        <Route path="/orders" element={<Orderpage/>} />

      </Routes> 
      </div>
  );
}

export default Admin;
