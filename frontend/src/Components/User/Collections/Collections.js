import React from 'react'

import './collections.css'

function Collections() {
  return (
    <div className='header-Collection'>

    <nav>
            <ul className='navlist'>
            <li><a href="/" >HOME</a></li>
    
            </ul>
            </nav>


 <img className="Collectionimg" src="\collectionss.png"alt="Collectionimg"/>
 <h1 className='collectionheading'>CLASSIC GLORY</h1>
 <nav>
        <ul className='collectionsnav'>
          <li><a href='/user/neklace'>NECKLACES</a></li>
          <li><a href='/user/bracelet'>BRACELETS</a></li>
          <li><a href='/user/earrings'>EARRINGS</a></li>

          <li><a href='/user/rings'>RINGS</a></li>

        </ul>
      </nav>
     </div>
  )
}

export default Collections
