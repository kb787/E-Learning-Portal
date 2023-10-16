import React from 'react'
import './Activities.css'
import CoursesCard from '../Home/components/CoursesCard'
import NavBar from '../NavBar/NavBar' 
import Footer from '../Home/components/Footer'
const Activities = () => {
  return (
    <>
    <NavBar />
      <section className='activities_section'>
        <div className="activities_hero">
          <div className="activities_content">
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Have Fun</button>
          </div>
          <div className="activities_img">
            <div className="activities_img_1">

            </div>
            <div className="activities_img_2">
              
            </div>
            <div className="activities_img_3">

            </div>
            <div className="activities_img_4">

            </div>
          </div>
        </div>
        <div className="activities_category_container">
          <div className="activities_category_headline">
            <h1>Activities</h1>
          </div>
          <div className="activities_category_card_container">
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
            <CoursesCard/>
          </div>
        </div>
        <div className="activities_category_container">
          <div className="activities_category_headline">
            <h1>Recomanded Book</h1>
          </div>
          <div className="activities_category_card_container">
            <div className="Book_container">
              <img src="" alt="" />
              <h2>Title:</h2>
            </div>
            <div className="Book_container">
              <img src="" alt="" />
              <h2>Title:</h2>
            </div>
            <div className="Book_container">
              <img src="" alt="" />
              <h2>Title:</h2>
            </div>
            <div className="Book_container">
              <img src="" alt="" />
              <h2>Title:</h2>
            </div>
          </div>
        </div>
      </section>
    <Footer />  
    </>
  ) 
}

export default Activities