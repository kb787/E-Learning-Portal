import React, { useEffect, useState } from 'react'
import './EventCard.css'
const EventCard = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch(`http://localhost:3500/v7/api/event/getAllevent`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setdata(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata()
    }, [])
    return (
        <>
            {
                data.map((data) => (
                    <div className="EventPage_card" key={data._id}>
                        <div className="EventPage_card_content">
                            <div className="EventPage_card_title">{data.eventTitle}</div>
                            <div className="EventPage_card_description">
                                {data.eventDescription}
                            </div>
                            <div className='EventPage_card_rating'>Time: {data.eventTimings}</div>
                            <div className='EventPage_card_rating'>Venu: {data.eventVenue}</div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default EventCard