import React from 'react'
import './Footer.css'
import {NavLink } from 'react-router-dom'
import twitter1 from '../images/twitter1.jpeg'
import facebook1 from '../images/facebook1.jpeg'
import linkedin1 from '../images/linkedin1.jpeg'

export default function Footer() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // function handleLogout() {
  //   setIsLoggedIn(false); 
  // }

  return (
    <div className='footer'>
        {/* <div className='footerh'> */}
            <div className='footer1'>     
        <div className='about-postit'>
       <h6>About Post<span className='B'>it.</span></h6>
        <p className='postittext'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vero omnis eos itaque adipisci sit at cum ratione consequatur id doloremque, saepe 
            repellendus aliquam ea voluptas, dolores nemo voluptatem necessitatibus quidem.</p>
            </div>
            <div className='Quick-Menu'>
                <div className='Quick-Menu-nav'>
                  <h5>Quick Menu</h5>
                  <NavLink className='P' to='/'>
                  <p>Home</p> 
                  </NavLink>
                  <NavLink className='P' to='/stories'>
                  <p>Stories</p> 
                  </NavLink>
                  <NavLink className='P' to='/stories'>
                  <p>Trending Stories</p>
                  </NavLink>
                  <NavLink className='P' to='/stories'>
                  <p>Popular Stories</p>
                  </NavLink> 
                </div>
                </div>
                <div className='Quick-Menu'>
                <NavLink className=' Quick-Menu-nav2' >
                <NavLink className='P' to='/signup'>
                  <p>Sign Up</p> 
                  </NavLink>
                  <NavLink className='P' to='/login'>
                  <p>Login</p> 
                  </NavLink>
                  <NavLink className='P' to='#'>
                  <p>Contact Us</p> 
                  </NavLink>
                </NavLink>
                </div>
               
            <div className='newsletter'>
                <h6 className='subscribed'>Subscribe to our newsletter</h6>
                <form >
                <input type='text'placeholder='Email address' id='email' className='subscribe' required />
                <div>
                <button className='subscribeb'>Subscribe</button>
                </div>
                </form>
            </div>
            
            </div>
            <hr />
            <div className='terms'>
            <p>Terms and Policy</p>
            
            <img src={twitter1} alt='twitter-logo' className='logo'/>
            <img src={facebook1} alt='facebook-logo' className='logo'/>
            <img src={linkedin1} alt='linkedin-logo' className='logo'/>
            
            </div>
            </div>
            
    // </div>
  )
}
