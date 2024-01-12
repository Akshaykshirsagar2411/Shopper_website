
import React from 'react'
// import './CSS/LoginSignUp.css'
import {Link} from 'react-router-dom'
import './CSS/Login.css'

function Login() {
  return (
    <div className='loginsignup'>
      
      <div className='loginsignup-container'>

        <h1>Login Page</h1>
        <div className='loginsignup-fields'>

         
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Login</button>
        {/* <p className='loginsignup-login'>Already have an account? <span></span></p> */}

        <div className='loginsignip-agree'>
            <input type='checkbox' name='' id=''/>
            <p>By continuing i agree to terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default Login;
