import React, { useState } from 'react'
import './SignUp.css';
import { useNavigate } from 'react-router-dom'
// import useFetch from './../hooks/useFetch';


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url ='http://localhost:3000/api/v1/signUp'  

  const redirect = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const res = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password }),
    })
      const data = await res.json()
      console.log(data);
      redirect("/login");
      // .then(response=>response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error(error))
  }
  return (
    <div className='signup'>
        <div className='signupform'  >
            <div className='join-postit'>
            <h2>Join Post<span className='B'>it.</span></h2>
            <p>Enter your Email address to create an account</p>
            </div>

            <div className='mt-5'>
                <form onSubmit={signup}>
                    <div className='signup1'>
                    <label  htmlFor="name">UserName</label><br/>
                    <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}  className='bod-w'  required /><br/>
                    </div>
                    <div className='signup1'>
                    <label className='mt-5' htmlFor="email">Email Address</label> <br />
                    <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='bod-w' required /><br/>
                    </div>
                    <div className='signup1'>
                    <label className='mt-5' htmlFor="password">Password</label><br/>
                    <input type="text" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}  className='bod-w' required /><br/>
                    </div>
                    <div className='signup2'>
                    <button type='submit'className='signup-button'>Continue</button><br/>
                    </div>
                </form>
                <h6 className='existing-account'>Already have an account?<a href='/login'> Login</a></h6>
                
            </div>
        </div>
       
    </div>
  )
}
