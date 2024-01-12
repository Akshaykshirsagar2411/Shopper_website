import React from 'react'

import new_collection from '../Assets/New_collection'
import Items from '../Itoms/Items';
import './NewCollections.css'

function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr/>
      <div className='collections'>
           {new_collection.map((item,i)=>{

            return<Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

           })}
      </div>
    </div>
  )
}

export default NewCollections;
