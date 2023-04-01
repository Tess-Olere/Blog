import React, { useState, useEffect } from "react";
import "./Edit.css";
import { Container } from "react-bootstrap";
import NavBarB from "../components/NavBarB";
import Footer from "./../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [image, setImage] = useState(null);
  const { blogId } = useParams();
  const url = `https://post-it-ylvw.onrender.com/api/v1/blog/${blogId}`;
  const token = JSON.parse(localStorage.getItem("token"));

  const fetchStory = async () => {
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const { story } = await res.json();
    setTitle(story.title);
    setDescription(story.description);
    setTag(story.tag);
  };
  useEffect(() => {
    fetchStory();
  }, []);

  const redirect = useNavigate();
  const editStory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tag", tag);
    formData.append("image", image);
    
    const res = await fetch(url, {
      method: "PATCH",
      body: formData,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    // console.log(formData);
    const data = await res.json();
    console.log(data);
    if (data.success) {
       redirect("/mystories");
    }
    
  };
  return (
    <div>
      <NavBarB text1="Stories" text2="Contact" />

      <div className="crt-story">
        <h1 className="createstory">Edit Story</h1>
        <form
          className="create-sm"
          encType="multipart/form-data"
          onSubmit={editStory}
        >
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="create-input"
            required
          />
          <br />

          <input
            type="text"
            placeholder="Tags"
            name="tag"
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="create-input1"
            required
          />
          <br />

          <textarea
            placeholder="Write your story....."
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="create-input2"
            required
          />
          <br />

          <input
            type="text"
            placeholder="createdBy"
            name="createdBy"
            id="createdBy"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            className="create-input1"
          />
          <br />

          <input
            accept="image/*"
            type="file"
            placeholder="Choose a file"
            name="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className=" create-input3"
            required
          />
          <br />

          <div className="d-flex justify-content-center">
            <button className="createstory-btn">Publish Story</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
