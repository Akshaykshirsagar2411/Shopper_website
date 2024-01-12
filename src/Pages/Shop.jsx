import React from 'react'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'

function Shop() {


  // const {all_product} = useContext(ShopContext);
  // const {productId} = useParams();
  // const product = all_product.find((e)=> e.id === Number(productId))


  return (
    <div>
      {/* <Popular/> */}
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop
