import React, { useEffect, useState } from 'react'
import './Stories.css'
import Footer from '../components/Footer'
import NavBarB from '../components/NavBarB'
import unsplash1 from '../images/unsplash1.png'
import { Link } from 'react-router-dom'

export default function Stories() {
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
        <p> Surround yourself with curious individuals who share your enthusiasm for learning and exploration. Engage in conversations with them, exchange ideas, and collaborate on projects. 
          Being in a community of curious minds can fuel your own curiosity and inspire new interests.</p>
        
        </div>
        <div>
        <img src={unsplash1} alt="text"/>
        </div>
      
        </div>

        {isLoading && <p>Loading...</p>}
        <div className='gridcontainer'>
        {stories.map((story) =>{
          const { _id, title, description, tag, image} = story
          console.log(story);
          return (
            <div key ={_id} className='griditems'>
            <div className='griditems1'>
            <img src={image} alt='imager'  className='description'/>
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
