import React from 'react'
import './userhomepage.css'

const UserHomepage= ({ onShopNowClick }) =>{
  return (
    <div>
  
 
  <div className='brandname'>

  <h1>Classic Glory</h1>
  
  <p className='headparagraph'>Good Things Comes In Small Packages</p>
  <div className="shop-now">
        <button className="shop-now-button" onClick={onShopNowClick}>
          SHOP NOW
        </button>
          
        </div>
        

        {/* <nav>
          <a href="/cart"><img src='.\' alt=''/></a>
          </nav> */}

</div>
</div>
  )
}

export default UserHomepage
