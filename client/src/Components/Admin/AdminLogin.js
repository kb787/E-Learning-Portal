import { Link } from 'react-router-dom';
import axios from 'axios' ;
import {message} from 'antd' ;
import { useNavigate } from "react-router-dom";
import {useState} from 'react' ;
import './AdminLogin.css' ;
import NavBar from '../NavBar/NavBar';
import Footer from '../Home/components/Footer';

const AdminLogin = () => {

  const [userEmailAddress,setUserEmailAddress] = useState('') ;
  const [userPassword,setUserPassword] = useState('') ;

  var navigate = useNavigate() ;

  const handleAdminLogin = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var postResponse = await axios.post("http://localhost:3500/v5/api/users/postAdminLogin",
            {
                userEmailAddress:userEmailAddress ,
                userPassword:userPassword 
            }
            ) 
            console.log(postResponse) ;
            if(postResponse.data && postResponse.data.success)
            {
                message.success(" Login successfull ") ;
                navigate("/adminpage") ;
            }
            else 
            {
                message.error("Inavlid email address or password") ;
            }
        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }

  return (
  <> 
  <NavBar /> 
  <section className="custom-container forms">
    <div className="custom-form login">
      <div className="custom-form-content">
        <header className="login">Login as Administrator</header>
        <form action="#">
          <div className="field input-field login">
            <input type="email" placeholder="Email" className="input-login" 
              value = {userEmailAddress}
              onChange={(e) => setUserEmailAddress(e.target.value)}
              required
            />
          </div>
          <div className="field input-field login">
            <input
              type="password"
              placeholder="Password"
              className="input-password"
              value = {userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
          </div>
          <div className="field button-field login">
            <button className="login" onClick={handleAdminLogin}>Login</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <Footer />
  </> 
  );
};

export default AdminLogin;