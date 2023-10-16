import {Link} from 'react-router-dom' ;

const AdminPage = () => {
   return (
       <div className = "AdminPage">
           <div className = "adminNavbar">
               <ul className = "navigationItems">
                   <li className = "navItemList">
                      <Link to = "/AdminPage"> 
                           Home
                      </Link>  
                    </li>
                    <li className = "navItemList">
                      <Link to = "/NewVideos"> 
                           Post new  Videos
                      </Link>      
                    </li>
                    <li className = "navItemList">
                    <Link to = "/NewEvents"> 
                           Organize Events 
                    </Link> 
                    </li>
                </ul>     
           </div> 
       </div>
   )
}

export default AdminPage ;