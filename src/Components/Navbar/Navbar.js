import React, { Component,useEffect, useState } from 'react';
import c2 from '../Assets/c2.jpg'
import cart2 from '../Assets/cart2.png'
import './Navbar.css'
import {Link } from 'react-router-dom';

function Navbar() {

  const [menu, setMenu] = useState("shop");
  return (
    <>
    <div className='navbar'>
      <div className='nav-logo'>
        <img  src={c2} height={70} width={70}></img>
        <p>SHOPPER</p>

      </div>
      <div className='nav-menu'>
         <ul>
          <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          {/* <li onClick={()=>{setMenu("mens")}}><Link to='/men'>Mens</Link> {menu==="mens"?<hr/>:<></>}</li> */}
          <li onClick={()=>{setMenu("man")}}><Link to='/men'>Mens</Link> {menu==="man"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Womens</Link> {menu==="womens"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>  
        
        

        </ul>

      </div>
      <div className='cart'>
      <Link to='/signup'><button>Login</button></Link>
        <img src={cart2} height={50} width={50}></img>
        <div className='cart-count'>0</div>
      </div>
     
    </div>
    <hr/>
    </>
  )
}

export default Navbar;
