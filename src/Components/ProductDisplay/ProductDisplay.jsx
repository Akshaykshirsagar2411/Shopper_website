import React from 'react'
import './ProductDisplay.css'
import Product from '../../Pages/Product';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.jpg'

function ProductDisplay(props) {

    const {product} = props;
  return (
    <div className='productDisplay'>
      <div className='productDisplay-left'>
          <div className='productDisplay-img-list'>
             <img src={product.image}/>
             <img src={product.image}/>
             <img src={product.image}/>
             <img src={product.image}/>
             

              Hello
          </div>
           <div className='productDisplay-image'>
                <img className='productDisplay-main-img' src={product.image}/>
           </div>
      </div>
     <div className='productDisplay-right'>
   <h1>{product.name}</h1>
     <div className='productDisplay-right-star'>
         <img src={star_icon}/>
         <img src={star_icon}/>
         <img src={star_icon}/>
         <img src={star_icon}/>
         <img src={star_dull_icon}/>
          <p>(122)</p>
     </div>

     </div>

    </div>
  )
}

export default ProductDisplay
