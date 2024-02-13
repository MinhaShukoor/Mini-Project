import React from 'react'
import { Routes,Switch,Route } from 'react-router-dom';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminDashboardPage from './pages/Admin/AdminDashboardPage';
import AdminAddProductPage from './pages/Admin/AdminAddProductPage';
import AdminEditProductPage from './pages/Admin/AdminEditProductPage';
function AdminRoutes() {
  return (
    <div>
    <Routes>
    <Switch>
    <Route path="/admin/login" component={AdminLoginPage} />
    <Route path="/admin/dashboard" component={AdminDashboardPage} />
    <Route path="/admin/productsadd" component={AdminAddProductPage} />
    <Route path="/admin/products/:productId/edit" component={AdminEditProductPage} />
  </Switch>
  </Routes>
  </div>
);
}

export default AdminRoutes

