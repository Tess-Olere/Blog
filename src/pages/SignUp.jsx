import React, { useState } from 'react'
import './SignUp.css';
import { NavLink, useNavigate } from 'react-router-dom'
// import useFetch from './../hooks/useFetch';


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const url ='https://post-it-ylvw.onrender.com/api/v1/signUp'  

  const redirect = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const res = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name, email, password }),
    })
      const data = await res.json()
      if (data.errors) {
        const error = data.errors.email
        setErrors(error)

      }else {
        redirect("/login");
      }

      
      // console.log(data);
      
      // .then(response=>response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error(error))
  }
  return (
    <div className='sign-up'>
        <div className='signup-form1'  >
            <div className='join-postit2'>
            <h2>Join Post<span className='B'>it.</span></h2>
            <p>Enter your Email address to create an account</p>
            </div>

            <div className='mt-5'>
                <form onSubmit={signup}>
                    <div className='signup-1'>
                    <label  htmlFor="name">UserName</label><br/>
                    <input type="text" id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}  className='bod-w1'  required /><br/>
                    </div>
                    <div className='signup-1'>
                    <label className='mt-5' htmlFor="email">Email Address</label> <br />
                    <input type="text" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='bod-w1' required /><br/>
                    <p>{errors}</p>
                    </div>
                    <div className='signup-1'>
                    <label className='mt-5' htmlFor="password">Password</label><br/>
                    <input type="password" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}  className='bod-w1' required /><br/>
                    </div>
                    <div className='signup-2'>
                    <button type='submit'className='signup-button'>Continue</button><br/>
                    </div>
                </form>
                <h6 className='existing-account-1'>Already have an account?<NavLink to='/login'> Login</NavLink></h6>
                
            </div>
        </div>
       
    </div>
  )
}
