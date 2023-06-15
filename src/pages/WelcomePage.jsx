import React, { useEffect, useState } from 'react'
import './Welcome.css'
import Footer from '../components/Footer'
import NavBarB from '../components/NavBarB'
import unsplash from '../images/unsplash.jpg'
import { NavLink } from 'react-router-dom'

export default function WelcomePage() {
  // useEffect(() => {
  //   const user = localStorage.getItem(name)
  //   setName(user)
  // }, [name]);
 
  const [user, setUser] = useState('')
  const url= 'https://post-it-ylvw.onrender.com/api/v1/user'
  const token = JSON.parse(localStorage.getItem('token'));

  const fetchUser = async()=>{
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const {name} = await res.json()
    setUser(name)
  }
  useEffect(()=>{
    fetchUser()
  }, [])
  
  return (
    <div className='s'>
        <NavBarB text1='Stories' text2='Contact'/>
        <div className='unsplash2'>
            <div>
                <div className='welcome'>
                  <h1>Welcome {user},</h1>
                    <p>Understand that there's always more to learn and discover. Approach new information and experiences with humility, 
                      acknowledging that you don't know everything. This mindset keeps you open to new knowledge and prevents complacency.</p>
                </div>
                <div className='welcomepage-btn'> 
                <NavLink to='/mystories'>
            <button className='welcomepage-btn1'>My Stories</button>
            </NavLink>
            <NavLink to='/stories'>
            <button  className='welcomepage-btn2'>Go to Feed</button>
            </NavLink>
            </div>
            </div>
            <img src={unsplash} alt="" />
        </div>
        <Footer />
    </div>
  )
}
