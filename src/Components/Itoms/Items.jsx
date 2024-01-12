import React from 'react'
import './Items.css';
import { Link,useParams } from 'react-router-dom';
 import all_products from '../Assets/All_products';
import Product from '../../Pages/Product';
function Items(props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image}/></Link>
          <p>{props.name}</p>
            <div className='items-prices'>
          <div className='item-prices-new'>
            $ {props.new_price}
          </div>

          <div className='item-price-old'>
            $ {props.old_price}
          </div>

            </div>
    </div>
  )
}

export default Items;
