import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const url ='https://post-it-ylvw.onrender.com/api/v1/login'  

  const redirect = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }),
    })
    
      const data = await res.json()
      
      if (data.token) {
        localStorage.setItem('token', JSON.stringify(data.token))
      redirect("/welcome");
      }
      if (data.errors) {
        setEmailError(data.errors.email)
        setPasswordError(data.errors.password)
      }
  }
  return (
    <div className='signup'>
        <div className='signupform'>
            <div className='join-postit'>
            <h2>Welcome back</h2>
            </div>
            <div className='mt-5'>
                <form onSubmit={login}>
                    <div className='signup1'>
                    <label className='mt-5' htmlFor="email">Email Address</label> <br />
                    <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='bod-w mt-3' required /><br/>
                    <p>{emailError}</p>
                    </div>
                    <div className='signup1'>
                    <label className='mt-5' htmlFor="password">Password</label><br/>
                    <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='bod-w mt-3' required /><br/>
                    <p>{passwordError}</p>
                   
                    </div>
                    <div className='signup2'>
                    <button type='submit'className='signup-button'>Continue</button><br/>
                    </div> 
                </form>
                
                <h6 className='existing-account'>No Account?<NavLink to='/signup'> SignUp</NavLink></h6>
                
            </div>
        </div>
       
    </div>
  )
}
