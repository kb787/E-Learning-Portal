import React from 'react'
import './EventPage.css'
import EventCard from './EventCard' 
import NavBar from '../NavBar/NavBar' 
import Footer from '../Home/components/Footer'
const EventPage = () => {
  return (
    <>
    <NavBar />
    <section className='event_section'>
        <div className="event_container">
            <div className="event_headline">
                <h1>Events</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quisquam sequi eaque perspiciatis quibusdam rem ab, reiciendis incidunt. Illum, numquam.</p>
            </div>
            <div className="event_card_container">
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
        </div>
    </section>
    <Footer />   
    </>
  )
}

export default EventPage