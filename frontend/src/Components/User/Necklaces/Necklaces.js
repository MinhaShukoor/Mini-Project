import React from 'react'
import'./necklace.css'


const necklacesData = [
    {
      id: 1,
      name: 'EL SOL NECKLACE',
      imageUrl: '/Necklace1.PNG',
      price: '$20.00 USD'
    },
    {
        id: 2,
        name: 'MARINER INITIAL ',
        imageUrl: '/Necklace2.PNG',
        price: '$19.00 USD'
      }, {
        id: 3,
        name: 'ZENIA NECKLACE',
        imageUrl: '/Necklace5.PNG',
        price: '$22.00 USD'
      }, {
        id: 4,
        name: 'DAINTY NECKLACE',
        imageUrl: '/Necklace4.PNG',
        price: '$18.00 USD'
      }, {
        id: 5,
        name: 'EVERMORE NECKLACE',
        imageUrl: '/Necklace3.PNG',
        price: '$23.00 USD'
      },
      {
        id: 6,
        name: 'MYSTERY NECKLACE',
        imageUrl: '/Necklace7.png',
        price: '$24.00 USD'
      },{
        id: 7,
        name: 'DOT BUTTERFLY',
        imageUrl: '/Necklace9.png',
        price: '$16.00 USD'
      },{
        id: 8,
        name: 'PEARLY TEDDY',
        imageUrl: '/Necklace8.png',
        price: '$17.00 USD'
      },{
        id: 9,
        name: 'SPIRAL NECKLACE',
        imageUrl: '/Necklace6.png',
        price: '$27.00 USD'
      },{
        id: 10,
        name: 'SNAKE CHARM',
        imageUrl: '/Necklace10.png',
        price: '$25.00 USD'
      },
  ];

function Necklaces() {
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${necklacesData} to cart`);
  };
    
      return (
        <div className='body'>
          <h2 className='necklaces-heading'>NECKLACES</h2>
          <div className="item-container">
            
            {necklacesData.map(necklace => (
              <div key={necklace.id} className="item">
                <img src={necklace.imageUrl} alt={necklace.name} />
                <h3>{necklace.name}</h3>
                <p>{necklace.description}</p>
                <p> {necklace.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>

              </div>
            ))}
          </div>
        </div>
      );
    }

export default Necklaces




