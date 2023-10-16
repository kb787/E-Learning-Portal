import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import { useState } from 'react'

const NewVideos = () => {
  
   const [courseUrl,setCourseUrl] = useState('') ;
   const [courseTitle,setCourseTitle] = useState('') ;
   const [courseDescription, setCourseDescription] = useState('') ;
   const [courseCategory,setCourseCategory] = useState('') ;
   const [courseSubCategory,setCourseSubCategory] = useState('') ;
   const [courseRating,setCourseRating] = useState('') ; 

  var navigate = useNavigate();

  const handleVideoUpload = async (e) => {
    e.preventDefault();
    try {
      var postResponse = await axios.post("http://localhost:3500/v3/api/videosData/postNewVideo",
        {
            courseUrl : courseUrl ,
            courseTitle : courseTitle ,
            courseDescription : courseDescription ,
            courseCategory:courseCategory ,
            courseSubCategory:courseSubCategory ,
            courseRating:courseRating ,
        }
      )
      console.log(postResponse);
      if (postResponse.data && postResponse.data.success) {
        message.success(" Video uploaded successfully ");
        navigate("/adminpage");
      }
    }
    catch (error) {
      console.log(error);
      message.error(" Server side error occured ");
    }
  }


  return (
    <section className="custom-container signUp-container forms">
      <div className="custom-form login">
        <div className="custom-form-content">
          <form action="#">
            <div className="field input-field login">
              <input type="text"
                placeholder="Url"
                className="input login"
                value={courseUrl}
                onChange={(e) => setCourseUrl(e.target.value)}
                required />
            </div>
            <div className="field input-field login">
              <input type="text"
                placeholder="Title"
                className="input login"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Description"
                className="password login"
                required
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
              />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Category"
                className="password login"
                required
                value={courseCategory}
                onChange={(e) => setCourseCategory(e.target.value)}
              />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Sub Category"
                className="password login"
                required
                value={courseSubCategory}
                onChange={(e) => setCourseSubCategory(e.target.value)}
              />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Rating"
                className="password login"
                required
                value={courseRating}
                onChange={(e) => setCourseRating(e.target.value)}
              />
            </div>
            <div className="field button-field login">
              <button className="login" onClick={handleVideoUpload} >Post Video</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewVideos ;