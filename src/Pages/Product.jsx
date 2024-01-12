import React, { useContext } from 'react'
import ShopContextProvider, { ShopContext } from '../Components/Context/Context'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';







function Product() {




  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  console.log("products => ", all_product)
  console.log("products => ", all_product)
  const product = all_product.find((e)=> e.id === Number(productId))

    console.log(product);

  return (

    <div>
       
      <ProductDisplay props={product}/>

    
      
    </div>
  )
}

export default Product
