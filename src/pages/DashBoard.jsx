import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar';
import Rectangle5 from '../images/Rectangle5.jpg'
import Rectangle5b from '../images/Rectangle5b.jpg'
import Rectangle5c from '../images/Rectangle5c.jpg'
import Rectangle38 from '../images/Rectangle38.jpg'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';
// import { Modal } from 'react-bootstrap';
// import Login from '../pages/Login';



export default function DashBoard() {
// const [showSignUpModal, setShowSignUpModal] = useState(false);
   

//    const handleSignUpButtonClick = () => {
//      setShowSignUpModal(true);
//    }
 
//    const handleSignUpFormSubmit = (event) => {
//      event.preventDefault(); // prevent the default form submission
//      // handle the login logic here
//      setShowSignUpModal(false); // close the modal     
//    }
   
   
  return (
    <div>
            <NavBar text1='Stories' text2='Contact' text3='Sign In' text4='Get started'/>   
         <div className='dashboard'>
        <Container className='imagetext1'>
                     <h1>Stay curious.</h1>
                    <p>Stay curious, my friend! Embrace the unknown and let your curiosity lead you down new paths. 
                      You never know what incredible discoveries and experiences await you when you keep an open mind and an insatiable appetite for knowledge.</p>
                      <NavLink to='/login'>
                 <button type='submit' className='staycurious-button'>Continue</button><br/>
                 </NavLink>
                </Container>
         </div>

         <Container className='image3'> 
                <div className='image4'>
                    <img className='images2' src={Rectangle5} alt='Happy people' />
                    <div className='images2-div'>
                    <h6 className='t1'>Lifestyle</h6>
                    <p>The 20 Biggest Fashion Companies in Nigeria 2022</p>
                    </div>
                    </div>
                    <div className='image4'>
                    <img className='images2 ' src={Rectangle5b} alt='Happy people'/>
                    <div  className='images2-div'>
                    <h6 className='t2'>Nature</h6>
                    <p>The 20 Biggest Agro Companies in Nigeria 2022</p>
                    </div>
                    </div>
                    <div className='image4'>
                    <img className='images2' src={Rectangle5c} alt='Happy people'/>
                    <div  className='images2-div'>
                    <h6 className='t3'>Technology</h6>
                    <p>The 20 Biggest Fintech Companies in Nigeria 2022</p>
                    </div>
                    </div>     
         </Container>

          <div className='reDuce1'>
         <div className='reDuce'>
               <img src={Rectangle38} alt='' className='bottomimage '/>
               <div className='text2'>
               <h3>Try Post<span className='B'>it.</span></h3>
               <p>Do you want to write or discover stories from writers on any topic?</p>
               <form className='form1'>
                  <input type='text' placeholder='Enter email address' name='name' id='name'/>
                  <button type='submit'>Continue</button>
               </form>
               </div>
               </div>
            </div>
         <Footer />
         {/* <Modal show={showSignUpModal} onHide={() => setShowSignUpModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form className='Modal'onSubmit={handleSignUpFormSubmit}>
            <Login />
          </form>
        </Modal.Body>
      </Modal> */}
     </div>
        
    
  )
}
