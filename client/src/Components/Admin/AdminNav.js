import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom' ;

const AdminNav = () => {
    return (
        <div className = "AdminNav">
                <div className = "navSetItemLogo">
                  <FontAwesomeIcon icon={faUnlockAlt} className='logo' />
                        <span className="logo-text">Unlock</span>
                        <span className="logo-text">U</span>
                </div>
            <ul className = "navSet">
                <li className = "navSetItem">
                  <Link to = "/adminpage" className = "adminlinking">   
                    Home
                   </Link>   
                </li>
                <li className = "navSetItem">
                  <Link to = "/newevent" className = "adminlinking">   
                    Plan Event
                   </Link> 
                </li>
                <li className = "navSetItem">
                <Link to = "/newvideo" className = "adminlinking">   
                    Post video
                </Link>
                </li>
            </ul>
        </div>
    )
}
export default AdminNav ;