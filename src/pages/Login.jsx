import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url ='http://localhost:3000/api/v1/login'  

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
        console.log(data);
      redirect("/welcome");
      }
      // if (data.errors) {
      //   setEmailError(data.errors.email)
      // }
      
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
                    </div>
                    <div className='signup1'>
                    <label className='mt-5' htmlFor="password">Password</label><br/>
                    <input type="text" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='bod-w mt-3' required /><br/>
                    </div>
                    <div className='signup2'>
                    <button type='submit'className='signup-button'>Continue</button><br/>
                    </div>
                    
                </form>
                <h6 className='existing-account '>No Account?<a href='/Signup'> SignUp</a></h6>
                
            </div>
        </div>
       
    </div>
  )
}
