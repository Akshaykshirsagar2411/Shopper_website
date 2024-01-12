import React from 'react'
import './Breadcrum.css'
import Arrow_icon from '../Assets/Arrow_icon.png'
function Breadcrum(props) {

  const {product} = props;
  return (
    <div className='breadcrum'>
      
      Home<img src={Arrow_icon}/> Shop <img src={Arrow_icon}/> {product.category} <img src={Arrow_icon}/> {product.name}

    </div>
  )
}

export default Breadcrum
