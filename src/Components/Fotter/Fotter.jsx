

import React from 'react'
import './Fotter.css'
import insta_icon from '../Assets/insta_icon.png'
import what_app from '../Assets/what_app_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import c2 from '../Assets/c2.jpg'
function Fotter() {
  return (
    <div className='fotter'>
      <hr/>
      <div className='fotter-logo'>

          <img src={c2} height={70} width={70} />
          <p>SHOPPER</p>

      </div>

      <ul className='fotter-links'>
        <li>Comany</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>

      </ul>

      <div className='footer-social-icons'>
        
        <div className='footer-icons-container'>

             <img src={insta_icon} height={30} width={30}/>


        </div>
        <div className='footer-icons-container'>

             <img src={what_app} height={30} width={30}/>


        </div>
        <div className='footer-icons-container'>

             <img src={facebook_icon} height={30} width={30} />


        </div>

      </div>

      <div className='footer-copyright'>
      <hr/>
      <p>Copyright @ 2024 - All Right Reserved</p>
      </div>

    </div>
  )
}

export default Fotter
