import {Link} from 'react-router-dom' ;
import AdminNav from './AdminNav';
import AdminDash from './AdminDash';
import Footer from '../Home/components/Footer';

const AdminPage = () => {
   return (
       <div className = "AdminPage">
            <AdminNav/>
            <AdminDash/>
            <Footer/>
       </div>
   )
}

export default AdminPage ;