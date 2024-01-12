import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Components/Context/Context';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Itoms/Items';

function ShopCategory(props) {

  const {all_products} = useContext(ShopContext);
  return (
    <div>
 
    <img />


    <div className='shopcategory-indexSort'>

<p>

  <span>Showing 1-12</span> out of 36 product
</p>

<div className='shopcategory-sort'>
sort by <img src={dropdown_icon}/>

</div>
 </div>

<div className='shopcategory-products'>
{all_products.map((item,i)=>{

if(props.category===item.category){

  return <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
}
else{

  return null;
  
}
})}
</div>
<div className='shopcategory-loadmore'>
explore more
</div>
      
    </div>
  )
}

export default ShopCategory
