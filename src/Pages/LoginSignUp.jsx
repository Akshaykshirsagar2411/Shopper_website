import React from 'react'
import './CSS/LoginSignUp.css'
import {Link} from 'react-router-dom'

function LoginSignUp() {
  return (
    <div className='loginsignup'>
      
      <div className='loginsignup-container'>

        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>

          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span><Link to='/login'>Login here</Link></span></p>

        <div className='loginsignip-agree'>
            <input type='checkbox' name='' id=''/>
            <p>By continuing i agree to terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignUp
