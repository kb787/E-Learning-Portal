import React from 'react'
import './PrisonorsReview.css'
// Import Swiper styles
import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

const PrisonersReview = () => {
    return (
        <>
            <div className="AboutUs_Team_container">
                <div className='gredient_ball'></div>
                <div className="AboutUs_team_content">
                <h1>Reviews</h1>
<p>Discover what our learners have to say about their experience with our E-Learning Platform.</p>

                </div>
                <div className="Prisoners_review_container">
                <Swiper
    spaceBetween={10}   
    slidesPerView={1}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    speed="3000"
    loop={true}
    modules={[Autoplay]}
>
    <SwiperSlide>
        <div className='AboutUs_team_center'>
            <div className="AboutUs_team_card">
                <div className="AboutUs_team_img">
                    <img src='' alt="" />
                </div>
                <div className="AboutUs_team_header">
                    <div className='AboutUs_team_title'>
                        <h1>John Smith</h1>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <p>Prisoner E-Learning Platform has transformed my life. The courses are engaging, and I've acquired valuable skills that give me hope for a better future. Highly recommended!</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='AboutUs_team_center'>
            <div className="AboutUs_team_card">
                <div className="AboutUs_team_img">
                    <img src='' alt="" />
                </div>
                <div className="AboutUs_team_header">
                    <div className='AboutUs_team_title'>
                        <h1>Lisa Johnson</h1>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <p>I'm incredibly grateful for the Prisoner E-Learning Platform. It's given me a chance to learn, grow, and prepare for a brighter future while serving my time. The courses are fantastic!</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className='AboutUs_team_center'>
            <div className="AboutUs_team_card">
                <div className="AboutUs_team_img">
                    <img src='' alt="" />
                </div>
                <div className="AboutUs_team_header">
                    <div className='AboutUs_team_title'>
                        <h1>David Brown</h1>
                        <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <p>Prisoner E-Learning Platform is a game-changer. The courses are informative, and they've helped me gain valuable skills and knowledge. It's a step towards rehabilitation.</p>
                </div>
            </div>
        </div>
    </SwiperSlide>
</Swiper>
                </div>
            </div>
        </>
    )
}

export default PrisonersReview