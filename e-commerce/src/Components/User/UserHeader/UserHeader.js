import React from 'react'
import { VscHeart } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import './userheader.css'





function UserHeader () {
  return (
    

<div className='header'>
  {/* <div classname='nav-list'> */}
 
    <nav>
       <ul className='nav-list'>
       
       <li><a href="/home">HOME</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/signup">SIGNUP</a></li>
        <a href='/wishlist' className='icons' ><VscHeart /></a>
 <a href='/cart' className='icon'><HiOutlineShoppingBag />
  
</a>


      </ul>
    </nav>

<div className='firstpage'>
{/* <img classname = "firstpage" src=".\home1.JPG" alt="firstpage"/> */}
<img classname = "firstpage" src=".\home3.PNG" alt="firstpage"/>


  </div>
  </div>
  


  )
}

export default UserHeader


