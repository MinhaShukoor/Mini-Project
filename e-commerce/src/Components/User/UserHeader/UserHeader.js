import React from 'react'
import { VscHeart } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";




import './userheader.css'





function UserHeader () {
  return (
    

<div>
  {/* <div classname='nav-list'> */}
 
    <nav>
       <ul className='nav-list'>
       
       <li><a href="/collections">COLLECTIONS</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/signup">SIGNUP</a></li>
        <a href='/wishlist' className='icons' ><VscHeart /></a>
 <a href='/cart' className='icon'><HiOutlineShoppingBag />
  
</a>


      </ul>
    </nav>



    <div className='logo-container'>


<img classname = "logo" src=".\Logo.png" alt="logo" className='logo-image'/>




<div className='firstpage'>
<img classname = "firstpage" src=".\IMG_3030.JPG" alt="firstpage"/>

  </div>
  </div>
  </div>


  )
}

export default UserHeader


