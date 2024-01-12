import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import  { BrowserRouter,Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Login from './Pages/Login';
import Fotter from './Components/Fotter/Fotter';

function App() {
  return (
    <div>
      <Navbar/>


 <Routes>
  <Route path='/' element={<Shop/>}></Route>
  {/* <Route path='/mens' element={<ShopCategory category="women"/>}></Route> */}
  <Route path='/men' element={<ShopCategory category="men"/>}></Route>
  <Route path='/womens' element={<ShopCategory category="women"/>}></Route>
  <Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
  
  <Route path='/product/:productId' element={<Product/>}></Route>
  {/* <Route path=':productId' element={<Product/>}></Route> */}
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/signup' element={<LoginSignUp/>}></Route>
  <Route path='/login' element={<Login/>}></Route>

 </Routes>
<Fotter/>

     
    </div>
  )
}

export default App;
