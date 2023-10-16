import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios' ;
import {message} from 'antd' ;
import { useNavigate } from "react-router-dom";
import {useState} from 'react'

const LoginPage = () => {

  const [userEmailAddress,setUserEmailAddress] = useState('') ;
  const [userPassword,setUserPassword] = useState('') ;

  var navigate = useNavigate() ;

  const handleLogin = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var postResponse = await axios.post("http://localhost:3500/v2/api/users/postUserLogin",
            {
                userEmailAddress:userEmailAddress ,
                userPassword:userPassword 
            }
            ) 
            console.log(postResponse) ;
            if(postResponse.data && postResponse.data.success)
            {
                message.success(" Login successfull ") ;
                navigate("/courses") ;
            }
            else 
            {
               message.error('Invalid credentials') ;
            }

        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }

  return (
    <section className="custom-container forms">
      <div className="custom-form login">
        <div className="custom-form-content">
          <header className="login">Login</header>
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
                className="input-login"
                value = {userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </div>
            <div className="field button-field login">
              <button className="login" onClick={handleLogin}>Login</button>
            </div>
          </form>
          <div className="form-link login">
            <div className = 'redirect'>
              Don't have an account?{' '}
              <Link to="/signup" className="signupLinking">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
