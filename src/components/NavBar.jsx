import React, { useEffect, useState } from "react";
import './NavBar.css'
import { Container, Modal } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Postit1 from "../images/Postit1.jpg";
import { Cross as Hamburger } from "hamburger-react";
import NavLocker from "./NavLocker";
import SignUp from "../pages/SignUp";


export default function NavBar({ text1, text2, text3, text4 }) {
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

  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const handleSignUpButtonClick = () => {
    setShowSignUpModal(true);
  }
  const handleSignUpFormSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission
    // handle the login logic here
    setShowSignUpModal(false); // close the modal
  } 


  
  return (
    <div className={showNav ? defaultStyle1 : defaultStyle}style={{ zIndex: 10 }} >
      <div>
        <div className="nav" >
          <div className="postit2">
              <NavLink to="/">
                <img src={Postit1} alt="logo" className="mt-2"/>
              </NavLink>
              <div className="ham">
              <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
          </div>

          <div className="bar">
            <div className="bar1">
              <NavLink to="/login" className="sTories">
                <p>{text1}</p>
              </NavLink>
              <NavLink to="/login" className="sTories">
                <p>{text2}</p>
              </NavLink>
              <NavLink
                to="/login"
                className="sTories">
                <p>{text3}</p>
              </NavLink>
             
            </div>
            <NavLink className="sTories2" >
            <button className="sTories2-btn"onClick={handleSignUpButtonClick}>{text4}</button>
            </NavLink>
          
          </div>
        </div>
        {isOpen && <NavLocker isOpen={isOpen} setOpen={setOpen} />}
      </div>
      <div className='modal1' >
      <Modal contentClassName='custom-modal-style' show={showSignUpModal} onHide={() => setShowSignUpModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form className='Modal'onSubmit={handleSignUpFormSubmit}>
            <SignUp />
          </form>
        </Modal.Body>
      </Modal>
      </div>
    </div>
  );
}
