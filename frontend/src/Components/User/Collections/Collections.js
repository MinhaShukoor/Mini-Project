import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import './collections.css'

function Collections() {
  return (
<div className='body'>
    <div className='headerCollect'>
    <nav>
      <ul className='navbarlist'>
            {/* <li><a href="/" >HOME</a></li> */}
            <li><a href='/user/neklace'>NECKLACES</a></li>
          <li><a href='/user/bracelet'>BRACELETS</a></li>
          <li><a href='/user/earrings'>EARRINGS</a></li>

          <li><a href='/user/rings'>RINGS</a></li>
 
    
            </ul>
            </nav>
<div className='Collectheader'>
  <nav>
    <ul className='listnavbar'>
    <li><a href='/'>HOME</a></li>
          <a href='/cart' className='icon'><HiOutlineShoppingBag /></a>
    </ul>
  </nav>
</div>
  <img className="Collectionimg" src="\collectionss.png"alt="Collectionimg"/>
 <h1 className='collectionheading'>CLASSIC GLORY</h1>

     </div>
     </div>
  )
}

export default Collections
