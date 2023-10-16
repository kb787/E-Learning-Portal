import React from 'react'
import './Herosection.css'
import Hero_img from '../../../assets/hero_img(1).png'
const Herosection = () => {
  return (
    <>
      <section className='hero_sections'>
        <div className='hero_main'>
          <div className='hero_content'>
            <h1 className="hero_title">Unlocking Potential Behind Bars: The Prisoner E-Learning Platform</h1>
            <p>Our E-Learning Platform empowers incarcerated individuals through accessible courses, shaping brighter futures. Join us in making a difference.</p>
            <div className="hero_btn">
              <button>Get Started</button>
              <button>Check out</button>
            </div>
          </div>
          <div className='hero_img_container'>
            <div className='hero_img'>
              <div className='circle_blue'></div>
              <div className='card_blur'>
                <p>transform yourself  to fit in social world</p>
              </div>
            <img src={Hero_img} alt="hero_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Herosection