import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHomePage from '../Pages/Admin/AdminHomePage';
import AdminUserlistpage from '../Pages/Admin/AdminUserlistpage';



const Admin = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<AdminHomePage/>} />
        <Route path="/admin/customers" element={<AdminUserlistpage/>} />

        

    
      </Routes> 
    </div>
  );
}

export default Admin;
