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
import NewEvent from './Components/Eventpage/NewEvent'
import SelectMeeting from './Components/VideoConference/SelectMeeting'
import VideoConference from './Components/VideoConference/VideoConference'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminPage from './Components/Admin/AdminPage'


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
          <Route path='/videoconference/:roomId' element={<VideoConference/>}/>
          <Route path='/selectmentor' element={<SelectMeeting/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/adminpage' element={<AdminPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App