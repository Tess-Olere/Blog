import React, { useState } from 'react'
import './Edit.css'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarB from '../components/NavBarB'
import Footer from './../components/Footer';

export default function CreateStory() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [image, setImage] = useState(null)
  const url = 'http://localhost:3000/api/v1/blog'
  const token =JSON.parse(localStorage.getItem('token'))
console.log(token);

     const redirect = useNavigate()
     const createStory = async (e) => {
      e.preventDefault();
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('tag', tag)
      formData.append('image', image)
      formData.append('createdBy', createdBy)
      
        const res = await fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            'authorization': `Bearer ${token}`,
          }
        });
        console.log(formData)
        const data = await res.json()
        console.log(data);
        // console.log({ title, description, tag, image });
        redirect("/stories");
    }
  
  return (
    <div>
        <NavBarB text1='Stories' text2='Contact'/>
        
        <div className='crt-story' >
            <h1 className='createstory'>Create Story</h1>
        <form className='create-sm' encType="multipart/form-data" onSubmit={createStory}>
        <input type="text" placeholder='Title' name='title' id='title' value={title} 
        onChange={(e) => setTitle(e.target.value)} className='create-input' required /><br/>

        <input type="text" placeholder='Tags' name='tag' id='tag' value={tag} 
        onChange={(e) => setTag(e.target.value)}className='create-input1' required /><br/>

        <textarea placeholder='Write your story.....' name='description' id='description' value={description} 
        onChange={(e) => setDescription(e.target.value)}className='create-input2'  required /><br/>

        <input type="text" placeholder='createdBy' name='createdBy' id='createdBy' value={createdBy} 
        onChange={(e) => setCreatedBy(e.target.value)}className='create-input1' required /><br/>

        <input accept='image/*' type="file" placeholder='Choose a file' name='file' id='image' 
        onChange={(e) => setImage(e.target.files[0])} className=' create-input3' required /><br/>
        
        <div className='d-flex justify-content-center'>
          <button className='createstory-btn'>Publish Story</button>
          </div>
        </form>
        </div>
        <Footer />
    </div>
  )
}
