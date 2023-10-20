 import adminDash from 'D:/elearningPlatform/client/src/Components/adminDash.png' ;

const AdminDash = () => {
    return (
        <div className = "AdminDash">
            <ul className = "contentCardSet">
                <li className = "dashboardContent">
                      <div className='hero_content'>
                          <h1 className="hero_title">Unlocking Potential Behind Bars: The Prisoner E-Learning Platform</h1>
                          <p>Organize new events create an environment of positivity . Get the audience <br/> an exposure to new mentors </p>
                          <div className="hero_btn">
                          <button>Get Started</button>
                           <button>Check out</button>
                        </div>
                       </div>
                </li>  
                <li className = "dashboardContent">
                     <img src = {adminDash} className = "dashboardImage" /> 
                </li>  
            </ul> 
        </div>
    )
}

export default AdminDash ;