import React from 'react'
import './Popular.css'
import all_product from '../Assets/All_products';
import Items from '../Itoms/Items';

function Popular() {
  return (
    <div className='popular'>
      
      <h1>Popular In Women</h1>

      <hr/>
      <div className='popular-item'>

        {all_product.map((item,i)=>{

            return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>

    </div>
  )
}

export default Popular
