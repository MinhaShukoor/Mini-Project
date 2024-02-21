
import React from 'react';
import './userhomepage.css';
import UserFooter from '../UserFooter/UserFooter'; 


const UserHomepage = ({ onShopNowClick }) => {
  return (
    <div>
      
      <div className='firstpage'>
{/* <img classname = "firstpage" src=".\home1.JPG" alt="firstpage"/> */}
<img classname = "firstpage" src=".\home3.PNG" alt="firstpage"/>
  </div>
      <div className='nav-list1'>
        <h1>CLASSIC GLORY</h1>
        <p className='headparagraph'>WE BELIEVE THAT EVERY PIECE OF JEWELRY HAS A UNIQUE TABLE TO TELL, AND WE'RE DEDICATED TO HELPING YOU DISCOVER THE PERFECT STORY FOR YOU. EXPLORE OUR CAPTIVATING RANGE TODAY AND LET YOUR STYLE SHINE WITH BRILLIANCE AND BEAUTY</p>
        <div className="shop-now">
          <button className="shop-now-button" onClick={onShopNowClick}>
            EXPLORE MORE
          </button>
        </div>
        <div>
          <h1 className='headofA'>NEW ARRIVALS</h1>
        </div>
        <div className='arrivalimage'>
          <img className="arrivalimage1" src="./Arrival1.PNG" alt="arrivalimage"/>
          <img className="arrivalimage2" src="./Arrival2.PNG" alt="arrivalimage"/>
          <img className="arrivalimage3" src="./Arrival3.PNG" alt="arrivalimage"/>
        </div>
        <div className="shop-nowtwo">
          <button className="shop-nowtwo-button" onClick={onShopNowClick}>
            SHOP NOW
          </button>
          <div className="shop-nowthree">
            <button className="shop-nowthree-button" onClick={onShopNowClick}>
              SHOP NOW
            </button>
            <div className="shop-nowfour">
              <button className="shop-nowfour-button" onClick={onShopNowClick}>
                SHOP NOW
              </button>
              <div className="bigsale-container">
                <div className="image-container">
                  <img className="sale-image" src="./bigsale.PNG" alt="saleimage" />
                </div>
                <div className="content-container">
                  <h2 className="big-h1">DON'T MISS OUR MID-WEEK BIG SALE!</h2>
                  <p className="b-paragraph">Looking to add some excitement to your week? Look no further! Our Mid-Week Big Sale is here to brighten up your Wednesday with unbeatable deals and irresistible discounts on a wide range of products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserFooter /> {/* Place UserFooter component here */}
    </div>
    
  );
};

export default UserHomepage;


