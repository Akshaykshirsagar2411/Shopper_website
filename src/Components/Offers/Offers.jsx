import React from 'react'
import './Offers.css'
import './Offers.css'
import exclusive1 from '../Assets/exclusive1.jpg'
import exclusive2 from '../Assets/exclusive2.jpg'
import women1 from '../Assets/women1.jpeg'

function Offers() {
  return (
    <div className='offers'>
      <div className='offers-left'>
           <h1>Exclusive</h1>
           <h1>Offers for you</h1>
           <p>Best sellers product</p>
           <button>Cheak Now</button>
      </div>
     <div className='offers-right'>
     
         <img src={exclusive2} />
         
     </div>

    </div>
  )
}

export default Offers
