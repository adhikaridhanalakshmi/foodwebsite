import React, { useState } from 'react'
import '../components/Accountinfo.css'

const Accountinfo = () => {
  const [popupstyle,showpopup]=useState("hide")
  const popup=()=>{
    showpopup("login-popup")
    setTimeout(()=>
      showpopup("hide"),3000)
  }
  return (
          <div className="cover">
          <h1>Login</h1>
          <input type='text' placeholder='USER NAME'/>
          <input type='password' placeholder='PASSWORD'/>
          <div className='login-btn' onClick={popup}>LOGIN</div>
          <p className='text'>OR LOGIN USING</p>
          <div className='alt-login'>
          <div className='facebook'></div>
          <div className='google'></div>
          </div>
          <div className={popupstyle}>
            <h3>Login Failed</h3>
            <p>Username or Password incorrect</p>
          </div>
          </div>        
  )
}

export default Accountinfo;


