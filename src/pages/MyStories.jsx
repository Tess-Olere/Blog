import React, { useEffect, useState } from 'react'
import './MyStories.css';
import { NavLink, Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBarB from '../components/NavBarB'
import {RiDeleteBin6Line} from 'react-icons/ri'


export default function MyStories() {
  const [stories, setStories] = useState([])
  const [isLoading, setLoading] = useState(true)
  // const { userId } = useParams();
  const token =JSON.parse(localStorage.getItem('token'))

const url = `https://post-it-ylvw.onrender.com/api/v1/blog`


const fetchStory = async () => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const data = await res.json();
  console.log(data);
  setLoading(false)
  setStories(data.story)
}
useEffect(() => {
  fetchStory()
}, [])

const handleDelete = async (id) => {
  const url = `https://post-it-ylvw.onrender.com/api/v1/blog/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }); 
  const data = await res.json();
  console.log(data);
  window.location.reload(false)
}
  
  
  return (
    <div>
        <NavBarB text1='Stories' text2='Contact'/>
      <div className='writestory'>
        <div className='mystory'>
            <h1>My Stories</h1>
            <NavLink to='/create'>
            <button className='create-story-btn'>Write story</button>
            </NavLink>
        </div>
        <div className='mystories'>
          <NavLink to='/stories'>
            <p>All</p>
            </NavLink>
            <NavLink to='/edit'>
            <p>Drafts</p>
            </NavLink>
            <NavLink to='/MyStories'>
            <p>Published</p>
            </NavLink>
        </div>
        <hr className='HR'/>
      </div>
       {isLoading  && <p>Loading...</p>}
      {stories.map((story) => {
        const {_id,title,description} = story
        console.log(story)
        return (
          <div className='griditems'>
        <div className='edit-post' key ={_id}>
        <h5>{title}</h5>
        <div className='edit-btn'>
          <Link to={`/edit/${_id}`}>
          <button className='btn1'>Edit Post</button>
          </Link>
          <button onClick={()=> handleDelete(_id)} className='btn2'><RiDeleteBin6Line/>Delete</button>
          </div> 
        </div>
              <p>{description.substring(0, 250)}...</p>
        </div>
        )
      })}    
      <Footer />
    </div>
  )
}
