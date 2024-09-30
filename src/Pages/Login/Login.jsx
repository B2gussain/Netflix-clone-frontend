import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import {login,signup} from "../../firebase"
import netflix_spinner from "../../assets/netflix_spinner.gif"
const Login = () => {
  const [signstate,setSignstate]=useState("Sign In")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)
  
  
  
  const user_auth= async (event)=>{
    event.preventDefault();
    setLoading(true)
if(signstate==="Sign In"){
  await login(email,password);
}
else{
  await signup(name,email,password)
  setLoading(false)
}
  }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login_logo' alt="" />
      <div className="login_form">
        <h1>{signstate}</h1>
        <form >
          {signstate==="Sign Up"?<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your name' />:<></>}
          
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
          <button type='submit' onClick={user_auth}>{signstate}</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form_switch">
          {signstate==="Sign In"
          ? 
           <p>New to Netflix? <span onClick={()=>{setSignstate("Sign Up")}}>Sign Up Now</span></p>
          :
          <p>Already have account? <span onClick={()=>{setSignstate("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
      
    </div>
  )
}

export default Login