import React, { useEffect, useState } from 'react'
import './Welcome.css'
import Footer from '../components/Footer'
import NavBarB from '../components/NavBarB'
import unsplash from '../images/unsplash.jpg'

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Esse quam quae consequatur velit tempora omnis, assumenda impedit eveniet autem voluptatibus repellendus magni possimus expedita! Dolores totam quibusdam itaque numquam debitis?</p>
                </div>
                <div className='welcomepage-btn'> 
            <button className='welcomepage-btn1'><a href='/mystories'>My Stories</a></button>
            <button  className='welcomepage-btn2'><a href='/stories'>Go to Feed</a></button>
           
            </div>
            </div>
            <img src={unsplash} alt="" />
        </div>
        <Footer />
    </div>
  )
}
