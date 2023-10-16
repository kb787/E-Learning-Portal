import React from 'react'
import Herosection from './components/Herosection'
import PlatformServices from './components/PlatformServices'
import CoursesList from './components/CoursesList'
import PrisonersReview from './components/PrisonersReview'
import NavBar from '../NavBar/NavBar'
import Footer from './components/Footer'

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Herosection/>
            <PlatformServices/>
            <CoursesList/>
            <PrisonersReview/>
            <Footer />
        </>
    )
}

export default HomePage