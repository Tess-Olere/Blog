import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './NavLockerB.css'



export default function NavLocker({isOpen, setOpen, text1, text2}) {
    const redirect = useNavigate()
    const handleLogout = () => {
      localStorage.removeItem('token')
      redirect('/login')
    }
    
  return (
    <div className='navlocker' onClick={() => setOpen(!isOpen)}>
        <div>
        <NavLink className='contact' to='/stories' onClick={() => setOpen(!isOpen)}>
            <p>{text1='Stories'}</p>
        </NavLink>
        <NavLink className='contact' to='/' onClick={() => setOpen(!isOpen)}>
            <p>{text2='Contact'}</p>
        </NavLink>
        <NavLink className='contact' to='/login' onClick={handleLogout}>
        <p>logout</p>
        </NavLink>
        </div>  
       
    </div>
    
  )
}