import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/Home/HomePage'
import NavBar from './Components/NavBar/NavBar'
import LoginPage from './Components/LoginPage/LoginPage'
import SignUp from './Components/SignUp/SignUp'
import Courses from './Components/Courses/Courses'
import Activities from './Components/Activities/Activities'
import DailyUpdate from './Components/DailyUpdate/DailyUpdate'
import Footer from './Components/Home/components/Footer'
import EventPage from './Components/Eventpage/EventPage' 
import NewEvent from './Components/Admin/NewEvent'
import SelectMeeting from './Components/VideoConference/SelectMeeting'
import VideoConference from './Components/VideoConference/VideoConference'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminPage from './Components/Admin/AdminPage' 
import NewVideos from './Components/Admin/NewVideos' 
import CourseDetails from './Components/CourseDetail/CourseDetails' 
import Course1 from './Components/CourseDetail/Course1' 


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/activities' element={<Activities/>}/>
          <Route path='/dailyupdates' element={<DailyUpdate/>}/>
          <Route path='/events' element={<EventPage/>}/>
          <Route path='/newevent' element={<NewEvent/>}/>
          <Route path='/newvideo' element={<NewVideos/>}/>
          <Route path='/videoconference/:roomId' element={<VideoConference/>}/>
          <Route path='/selectmentor' element={<SelectMeeting/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/adminpage' element={<AdminPage/>}/>
          <Route path='/course1' element={<Course1/>}/>
          <Route path='/course/:id' element = {CourseDetails} /> 

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App