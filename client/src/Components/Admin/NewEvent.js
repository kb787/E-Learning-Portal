import React from 'react'
import { Link, useNavigate } from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;
import {useState} from 'react' ;
import AdminNav from './AdminNav';
import Footer from '../Home/components/Footer';


const NewEvent = () => {

  const [eventTitle,setEventTitle] = useState('') ;
  const [eventDescription,setEventDescription] = useState('') ;
  const [eventVenue,setEventVenue] = useState('') ;
  const [eventTimings,setEventTimings] = useState('') ;
  var navigate = useNavigate() ;

  const handleNewEvent = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var postResponse = await axios.post("http://localhost:3500/v4/api/eventsData/postNewEvent",
            {
                eventTitle:eventTitle ,
                eventDescription:eventDescription ,
                eventVenue:eventVenue ,
                eventTimings:eventTimings
            }
            ) 
            console.log(postResponse) ;
            if(postResponse.data && postResponse.data.success)
            {
                message.success(" Successfully booked the event ") ;
                navigate("/adminpage") ;
            }
        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }


  return (
   <div className = "NewEvent">
    <AdminNav/>
    <section className="custom-container signUp-container forms">
      <div className="custom-form login">
        <div className="custom-form-content">
          <form action="#">
            <div className="field input-field login">
              <input type="text"
                placeholder="Title"
                className="input login"
                value = {eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required />
            </div>
            <div className="field input-field login">
              <input type="text"
                placeholder="Description"
                className="input login"
                value = {eventDescription}
                onChange={(e) =>setEventDescription(e.target.value)}
                
                />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Venue"
                className="password login"
                required
                value = {eventVenue}
                onChange={(e) => setEventVenue(e.target.value)}
              />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Timings"
                className="password login"
                required
                value = {eventTimings}
                onChange={(e) => setEventTimings(e.target.value)}
              />
            </div>
            <div className="field button-field login">
              <button className="login" onClick={handleNewEvent} >Schedule Event</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </div> 
  )
}

export default NewEvent ;