
import React from 'react';
import { VscHeart } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import './userheader.css';

function UserHeader() {
  return (
    <div className='header'>
      <nav>
        <ul className='nav-list'>
          <li><a href='/'>HOME</a></li>
          <li><a href='/contact'>CONTACT</a></li>
          <li><a href='/user/login'>LOGIN</a></li>
          <li><a href='/user/signup'>SIGNUP</a></li>
          <a href='/wishlist' className='icons'><VscHeart /></a>
          <a href='/cart' className='icon'><HiOutlineShoppingBag /></a>
        </ul>
      </nav>
    </div>
  );
}

export default UserHeader;
