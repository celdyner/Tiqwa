import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./design.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitForm = (e) => {
    e.preventDefault()
    const newValue = { email: email, password: password }
    console.log(newValue)
      const url = "http://localhost:8080/registerUser/signin"; 
  
   
       
       fetch (url,{
           method:"POST",
           headers:{
               'Content-Type': 'application/json'
           },
           body:JSON.stringify(newValue)
       })
       .then((res) => console.log(res))
       .catch((err) => console.log(err));
   

      setEmail("")
      setPassword("")
    
    }
   
  return (
    <>
    
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default Login
