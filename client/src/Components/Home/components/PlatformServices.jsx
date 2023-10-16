import React from 'react'
import './PlatformServices.css'
// import coursesIcon from '../../../assets/courses.png'
// import activitiesIcon from '../../../assets/activites.png' 
// import videoIcon from '../../../assets/video_conferernce.png' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGamepad, faVideo } from '@fortawesome/free-solid-svg-icons';

const PlatformServices = () => {
    const serviceData = [
        {
            title: 'Courses',
            description: 'Courses for prisoners to acquire new skills and knowledge.',
            icon: faBook, // FontAwesome icon
        },
        {
            title: 'Activities for Prisoners',
            description: 'Activities to engage and support prisoners.',
            icon: faGamepad, // FontAwesome icon
        },
        {
            title: 'Video Conferencing',
            description: 'Secure video conferencing services for live communication with mentors.',
            icon: faVideo, // FontAwesome icon
        }
    ];

    return (
        <section className='Service_section'>
            <div className="service_container">
                <div className="service_title">
                    <span>Our Services</span>
                </div>
                <div className="service_description">
                    Here are some of the services we offer:
                </div>
                <div className="service_cards">
                    {serviceData.map(({ icon, title, description }, index) => (
                        <div className="service_card" key={index}>
                            <div className="service_icon_title">
                                <FontAwesomeIcon icon={icon} size="3x" /> {/* Use FontAwesome icon */}
                                <span>{title}</span>
                            </div>
                            <div className="service_card_description">
                                <p>{description}</p>
                            </div>
                            <div className='service_card_btn'>
                                <button>Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PlatformServices;