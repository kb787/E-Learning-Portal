import React from 'react'
import './DailyUpdate.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import NewsCard from './NewsCard'
import NavBar from '../NavBar/NavBar';
import Footer from '../Home/components/Footer';
const DailyUpdate = () => {
  return (
    <>
    <NavBar />
      <section className='dailyupdate_section'>
        <div className="dailyupdate_container">
          <div className="dailyupdate_heading">
            <h1>Daily Update</h1>
            <p>These are the news which are trending Today.</p>
          </div>
          <div className="dailyupdate_content_container">
            <div className="daily_swiper_content">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                speed="3000"
                loop={true}
                modules={[Autoplay]}>
                <SwiperSlide>
                  <div className='silder_content'>
                    <div className='img_div'>
                      <img src="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/24/2020/03/Covid-19-Vaccine-development-e1599531596297.jpg" alt="covid" />
                    </div>
                    <h1>COVID-19 Vaccination Drive Begins</h1>
                    <p>Health authorities have launched a nationwide COVID-19 vaccination drive to curb the spread of the virus.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='silder_content'>
                    <div className='img_div'>
                      <img src="https://pbs.twimg.com/media/FxXeTl_aYAI_Lw0.jpg:large" alt="phone" />
                    </div>
                    <h1>Tech Giant Unveils New Smartphone</h1>
                    <p>In a recent announcement, a leading tech company revealed its latest flagship smartphone featuring cutting-edge technology.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='silder_content'>
                    <div className='img_div'>
                      <img src="https://m.smedata.sk/api-media/media/image/spectator/2/19/193732/193732_1200x.jpeg?rev=4" alt="Climate" />
                    </div>
                    <h1>Climate Change Summit Held in Paris</h1>
                    <p>World leaders gathered in Paris to discuss strategies for addressing the global climate crisis and reducing greenhouse gas emissions.</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="Top_news_card">
            <NewsCard/>
          </div>
        </div>
      </section>
    <Footer />
    </>
  )
}

export default DailyUpdate