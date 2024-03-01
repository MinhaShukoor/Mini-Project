import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2";

import './collections.css'

function Collections() {
  // const JewelryItem = [
  //   {
  //     id: 1,
  //     name: 'Diamond Necklace',
  //     price: '$200',
  //     image: '/Arrival1.PNG'
  //   },
  //   {
  //     id: 2,
  //     name: 'Gold Bracelet',
  //     price: '$150',
  //     image: '/gold_bracelet.jpg'
  //   },
  // ];
  return (
<div className='body'>
    <div className='headerCollect'>
    <nav>
      <ul className='navbarlist'>
            {/* <li><a href="/" >HOME</a></li> */}
            <li><a href='/user/necklaces' className='necklace'>NECKLACES</a></li>
          <li><a href='/user/earrings' className='earring'>EARRINGS</a></li>

          <li><a href='/user/rings' className='ring'>RINGS</a></li>
 
    
            </ul>
            </nav>
<div className='Collectheader'>
  <nav>
    <ul className='listnavbar'>
    <li><a href='/'>HOME</a></li>
          <a href='/user/cart' className='icon'><HiOutlineShoppingBag /></a>
    </ul>
  </nav>
</div>
  <img className="Collectionimg" src="\collectionss.png"alt="Collectionimg"/>
 <h1 className='collectionheading'>CLASSIC GLORY</h1>

     </div>

<div className='jewelry-items-container'>
  <img className="jewelry-item " src="\necklaces.PNG"alt="necklaces"/>
  <img className="jewelry-item " src="\earrings.png"alt="earrings"/>


     <img className="jewelry-item " src="\rings.png"alt="rings"/>
   
      
           </div>
     {/* <div className="jewelry-items-container">
        {JewelryItem.map(item => (
          <div key={item.id} className="jewelry-item">
            <img src={item.image} alt={item.name} className="jewelry-item-image" />
            <h2 className="jewelry-item-name">{item.name}</h2>
            <p className="jewelry-item-price">{item.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
     </div> */}
    
     </div>

  );
}

export default Collections
