import React from 'react'
import './NewsCard.css'
const NewsCard = () => {
  return (
    <>
    <ul className = 'updateCards'> 
     <li className = 'updateCardItems'>
      <div className="newscard_container">
        <div className="newscard_img">
          <img src = "https://i.ndtvimg.com/i/2017-09/google-logo_240x180_71505370053.jpg"  className = 'updateImages' />
        </div>
        <div className="content_card_container">
          <div className='newscard_heading'>
            <h1>India's Cyber Agency Issues High Severity Warning For Google Chrome</h1>
            <p>New Delhi: CERT-In has issued a high-severity rated warning cautioning against "multiple vulnerabilities" in popular web browser Google Chrome, which could allow a remote attacker to execute arbitrary code</p>
          </div>
          <div className="newscard_btn">
            <span>Read More</span>
          </div>
        </div>
      </div>
      </li>
      <li className = 'updateCardItems'>
      <div className="newscard_container">
        <div className="newscard_img">
        <img src = "https://c.ndtvimg.com/2023-10/5v0lsa9g_north-east-express-accident_625x300_12_October_23.jpg"  className = 'updateImages' />
        </div>
        <div className="content_card_container">
          <div className='newscard_heading'>
            <h1>"Suddenly, All Of Us Started Getting Tossed": Passengers Recall Bihar Train Accident Horror</h1>
            <p>Buxar: Coaches can be seen strewn on both sides of the track, a few of these several feet away, in Raghunathpur, a non-descript town in Buxar district of Bihar where the North East Express derailed</p>
          </div>
          <div className="newscard_btn">
            <span>Read More</span>
          </div>
        </div>
      </div>
      </li>
      <li className = 'updateCardItems'>
      <div className="newscard_container">
        <div className="newscard_img">
        <img src = "https://c.ndtvimg.com/2023-10/gp48q69o_nagpur-congress-fight_625x300_12_October_23.jpg"  className = 'updateImages' />  
        </div>
        <div className="content_card_container">
          <div className='newscard_heading'>
            <h1>Congress Factions Come To Blows At Nagpur Meet, Fight Started Over The Mic</h1>
            <p>Two factions of the Congress came to blows during a meeting to discuss the Lok Sabha seats under the Nagpur division. The meeting had been called by Maharashtra Congress president Nanata Patole</p>
          </div>
          <div className="newscard_btn">
            <span>Read More</span>
          </div>
        </div>
      </div>
      </li>
      </ul> 
      <br/>
      <br/>
      
    </>
  )
}

export default NewsCard