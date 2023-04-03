import React, { useEffect, useState } from 'react'
import './NavBarB.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Postit1 from '../images/Postit1.jpg'
import Ellipse1 from '../images/Ellipse1.jpg'
import { Cross as Hamburger } from "hamburger-react";
import NavLockerB from "./NavLockerB";

export default function NavBarB({text1, text2}) {
    const [isOpen, setOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const changeBg = () => {
      window.scrollY >= 60 ? setShowNav(true) : setShowNav(false);
    };
    useEffect(() => {
      changeBg();
      window.addEventListener("scroll", changeBg);
      return () => {
        window.removeEventListener("scroll", changeBg);
      };
    }, []);
    const defaultStyle = "top-0 w-100";
    const defaultStyle1 = "top-0 w-100 bg-white";

    const redirect = useNavigate()
    const handleLogout = () => {
      localStorage.removeItem('token')
      redirect('/login')
    }
  return (
    <div
      className={showNav ? defaultStyle1 : defaultStyle}style={{ zIndex: 10 }} >
    <div className='nav1'>
    <div className="postit-2">
      <div className="postit2">
        <div className="mt-2">
          <NavLink to="/"><img src={Postit1} alt="logo" /></NavLink>
        </div>
        <div
          className="hambug">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

     
        <div className="leftext">
          <NavLink
            to="/stories" className="navl">
            <p>{text1}</p>
          </NavLink>
          <NavLink to="#"
            className="navl">
            <p>{text2}</p>
          </NavLink>
          <NavLink to='/login'  className="navl">
              <p onClick={handleLogout}>Logout</p>
              </NavLink>
        <img src={Ellipse1} alt='Ellipse' className='avatar'/>
        </div>
      
    </div>
    {isOpen && <NavLockerB isOpen={isOpen} setOpen={setOpen} />}
  </div>
  </div>
  )
}
