import React, { useEffect, useState } from 'react'
import './Courses.css' 
import NavBarContent from '../NavBar/NavBarContent'
import Footer from '../Home/components/Footer'
import Button from 'react-bootstrap/Button';

const Courses = () => {

  const [MainData, setMainData] = useState([])
  const [SelectedCategory, setSelectedCategory] = useState("All")

  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [selectedSort, setSelectedSort] = useState('')
  const [isDifficultOpen, setIsDifficultOpen] = useState(false)
  const [isSortByOpen, setIsSortByOpen] = useState(false)
  const [isFilterOpen, setisFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {

    const fetchdata = async () => {
      try {
        const response = await fetch(`http://localhost:3500/v6/api/videosData/getAllVideos`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setMainData(jsonData);
        setIsLoading(false)
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata()
    window.scrollTo(0, 0);
  },[])
  const [dropdownOption, setdropdownOption] = useState({
  })

 // const [selectedSubtopic, setSelectedSubtopic] = useState({
 //  })

//  const difficultyoptions = ["Easy", "Medium", "Hard"]
  const sotrtBy = ["A-Z", "Number"]
//  const generalAptitudeSubtopics = [
//  ];
//  const programmingSubtopics = [
//  ];
//  const LogicalSubtopics = [
//  ];

  const handleSearchInput = async (topic) => {
    try {
        const response = await fetch(`http://localhost:3500/v6/api/search/${topic}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setMainData(jsonData);
    } catch (error) {
        console.log(error);
    }
}
  return (
    <>
     <NavBarContent />
      <section>
        <div className="aptitude_Main">
          <h1 className='aptitude_heading'></h1>
          <div className="filter_container">
            <div className='search_div'>
              <input type="text"  onChange={(e) => handleSearchInput(e.target.value)} placeholder='Search Topics' className='searchbar' />
            </div>
            <div className="filter_input">
              <div className='dropdown'>
                <input type="text" placeholder='Sort By rating' value={selectedSort} readOnly className='searchbar' />
                <i className={`bx bx-chevron-down ${isSortByOpen ? 'ArrowRotate' : ''}`} id="inputArrow"></i>
                <div className={`dropdown-content ${isSortByOpen ? 'show' : ''}`} id="difficultyMenu">
                  {
                    sotrtBy.map((option, index) =>
                      <>
                        <a key={index}>{option}</a>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="aptitude_container">
            <div className="sideBar_container">
              <div className="category_container">
                <h3 className='category_heading'>Category</h3>
                <ul className='category_ul'>
                 <li className='category_li' onClick={()=> handleSearchInput('General')}>General<i className={`bx bx-chevron-down ${dropdownOption["Soft Skills"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' onClick={()=> handleSearchInput('Soft Skills')}>Soft Skills<i className={`bx bx-chevron-down ${dropdownOption["Soft Skills"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' onClick={()=> handleSearchInput('Finacial Management')}>Financial Management<i className={`bx bx-chevron-down ${dropdownOption["Financial Management"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                {/*  <li className='category_li' onClick={()=> handleSearchInput('Mental Health')} >Mental Health<i className={`bx bx-chevron-down ${dropdownOption["Programming"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' onClick={()=> handleSearchInput('Spritual Content')} >Spritual Content<i className={`bx bx-chevron-down ${dropdownOption["Verbal"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li> */}
                  <li className='category_li' onClick={()=> handleSearchInput('Trade Skills')} >Trade Skills<i className={`bx bx-chevron-down ${dropdownOption["Trade Skills"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' onClick={()=> handleSearchInput('Basic Computer')} >Basic Computer<i className={`bx bx-chevron-down ${dropdownOption["Basic Computer"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                  <li className='category_li' onClick={()=> handleSearchInput('English Speaking')} >English Speaking<i className={`bx bx-chevron-down ${dropdownOption["English Speaking"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                {/*  <li className='category_li' onClick={()=> handleSearchInput('Family and RelationShip')} >General<i className={`bx bx-chevron-down ${dropdownOption["Logical Reasoning"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>*/}
                </ul>
              </div>
            </div>

            <div className='filter'>
              <button onClick={() => setisFilterOpen(!isFilterOpen)}><i className='bx bx-menu-alt-right'></i></button>
            </div>
            {

              <div className={`filter-section ${isFilterOpen ? 'open' : ''}`}>
                <div className="mobile_category_container">
                  <div className='mobile_heading_grid'>
                    <h3 className='category_heading'>Category</h3>
                    <img src="/static/media/close.6f8b0621c325d307e9d486f8740d96b4.svg" alt="" width="25"></img>
                  </div>
                  <ul className='category_ul'>
                    <li className='category_li' >General<i className={`bx bx-chevron-down ${dropdownOption["General"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li'>Soft Skills<i className={`bx bx-chevron-down ${dropdownOption["Soft Skills"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li' >Financial Management<i className={`bx bx-chevron-down ${dropdownOption["Financial Management"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li' >Trade Skills<i className={`bx bx-chevron-down ${dropdownOption["Trade Skills"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li' >Basic Computer<i className={`bx bx-chevron-down ${dropdownOption["Basic Computer"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>
                    <li className='category_li' >English Speaking<i className={`bx bx-chevron-down ${dropdownOption["English Speaking"] ? 'ArrowRotate' : ''}`} id="inputArrow"></i></li>

                  </ul>
                </div>
              </div>

            }
            <div className="problem_container">
              <div className="headline_problem_container">

              </div>
              <div className='problem_heading'></div>
              {
                isLoading ?
                  <div className='loader_container'>
                    <span className="loader"></span>
                  </div>
                  :
                  <div className='problem_main'>
                    {
                      MainData.map((data ) =>
                        <div className="CoursesList_card">
                          <div className="Courses_card_img">
                            <img src={data.courseUrl}co alt="Course" />
                          </div>
                          <div className="Courses_card_content">
                            <div className="Courses_card_title">{data.courseTitle}</div>
                            <div className="Courses_card_description">
                              {data.courseDescription}
                            </div>
                            <div className='Courses_card_rating'>{data.courseRating}</div>
                            <br/>
                            <Button variant="primary" className = 'courseListButton'>Explore More</Button>
                          </div>
                        </div>
                      )
                    }
                  </div>
              }
            </div>
          </div>
        </div>

      </section>
    <Footer/>  
    </>
  )
}

export default Courses