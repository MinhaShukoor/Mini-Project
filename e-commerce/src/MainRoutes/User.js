import React from 'react'
import { Routes, Route } from 'react-router-dom';
import UserHomepage from '../Pages/User/UserHome';


const User = () => {
  return (
    <Routes>
      <Route path="/user/homepage" component={<UserHomepage/>} />
      {/* <Route path="/user/cart" component={Cart} /> */}
      
  </Routes>
  )
}

export default User
