import React, { useEffect, useState } from 'react'
import './Stories.css'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBarB from '../components/NavBarB'
import unsplash1 from '../images/unsplash1.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Stories({onSearch}) {
  const url = 'https://post-it-ylvw.onrender.com/api/v1/allblog'
  const [stories, setStories] = useState([])
  const [isLoading, setLoading] = useState(true)
  const token =JSON.parse(localStorage.getItem('token'))

 
const fetchStory = async () => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await res.json();
  setLoading(false)
  setStories(data.story)
}
useEffect(() => {
  fetchStory()
}, [])

     


  return (
    <div>
        <NavBarB text1='Stories' text2='Contact'/>
        <div className='unsplash1'>
        <div className='gotstory'>
        <h1>You've got a story, Post<span className='B'>it.</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellat sapiente dolore omnis repudiandae. 
            Rem quia nesciunt eius quasi aliquam non nam enim quidem? Fugiat inventore maiores asperiores possimus nulla?</p>
        
        </div>
        <div>
        <img src={unsplash1} alt="text image" />
        </div>
      
        </div>

        {isLoading}
        <div className='gridcontainer'>
        {stories.map((story) =>{
          const { _id, title, description, tag, image} = story
          console.log(story);
          return (
            <div className='griditems'>
            <div key ={_id} className='griditems1'>
            <img src={image} alt='imager'  className='description'/>
              {/* <p>{createdBy}</p> */}
              <h4 className='descript'>{title}</h4>
              <p className=''>{tag}</p>
              
              <h6 className='descrip'>{description.substring(0, 100)}...</h6>
              <Link to={`/read/${_id}`}><h6>Read more...</h6></Link>
              
        </div>
        </div>
        
          )
          
        })}

      </div>
   
        <Footer />
    </div>
) 
}
