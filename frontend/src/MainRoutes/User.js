// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import UserHomePage from '../../src/Pages/User/UserHome';
// import UserLoginPage from '../../src/Pages/User/UserLoginPage';
// import UserSignupPage from '../../src/Pages/User/UserSignupPage'; // Import UserSignupPage component
// import ProductListPage from '../../src/Pages/User/ProductListPage';
// import ProductItemPage from '../../src/Pages/User/ProductItemPage';
// import CartPage from '../../src/Pages/User/CartPage';

// const User = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<UserHomePage />} />
//         <Route path="/user/login" element={<UserLoginPage />} />
//         <Route path="/signup" element={<UserSignupPage />} /> {/* Make sure this route is present */}
//         <Route path="/user/products" element={<ProductListPage />} />
//         <Route path="/user/products/:productId" element={<ProductItemPage />} />
//         <Route path="/user/cart" element={<CartPage />} />
//       </Routes>
//     </div>
//   );
// };

// export default User;

// User.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLoginPage from '../../src/Pages/User/UserLoginPage';
import UserSignupPage from '../../src/Pages/User/UserSignupPage';
import ProductListPage from '../../src/Pages/User/ProductListPage';
import ProductItemPage from '../../src/Pages/User/ProductItemPage';
import CartPage from '../../src/Pages/User/CartPage';
import UserHome from '../../src/Pages/User/UserHome';
import CollectionsPage from '../Pages/User/CollectionsPage';

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="/user/signup" element={<UserSignupPage />} />
        <Route path="/user/collections" element={<CollectionsPage/>}/>
        <Route path="/user/products" element={<ProductListPage />} />
        <Route path="/user/products/:productId" element={<ProductItemPage />} />
        <Route path="/user/cart" element={<CartPage />} />
    
      </Routes>
    </div>
  );
};

export default User;

