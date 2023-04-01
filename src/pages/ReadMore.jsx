
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import NavBarB from "../components/NavBarB";
import './ReadMore.css'
import Footer from '../components/Footer'

export default function ReadMore() {

  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { blogId } = useParams();

  const token = JSON.parse(localStorage.getItem("token"));

  const url = `https://post-it-ylvw.onrender.com/api/v1/allblog/${blogId}`

  const fetchPosts = async () => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    // console.log(data);
    // console.log(data.Story.title);
    setStories(data.story);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div >
      <NavBarB text1='Stories' text2='Contact'/>
      <div className='Read'>
      <img className='readimg' src={stories.image} alt="" />
      <h1>{stories.title}</h1>
      <h5>{stories.tag}</h5>
      <p>{stories.description}</p> 
      </div>
      <Footer />
    </div>
   
    
  );
};

    

