import React from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;


import {useState} from 'react'

const SignUp = () => {

  const [userName,setUserName] = useState('') ;
  const [userEmailAddress,setUserEmailAddress] = useState('') ;
  const [userPassword,setUserPassword] = useState('') ;
  const [userAge,setUserAge] = useState('') ;
  const [userAreaOfInterest,setUserAreaOfInterest] = useState('') ;

  var navigate = useNavigate() ;

  const handleRegister = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            var postResponse = await axios.post("http://localhost:3500/v1/api/users/postUserProfile",
            {
                userName:userName ,
                userEmailAddress:userEmailAddress ,
                userPassword:userPassword ,
                userAge:userAge ,
                userAreaOfInterest:userAreaOfInterest
              
            }
            ) 
            console.log(postResponse) ;
            if(postResponse.data && postResponse.data.success)
            {
                message.success(" Registration successfull ") ;
                navigate("/courses") ;
            }
        } 

        catch(error)
        {
            console.log(error) ;
            message.error(" Server side error occured ") ;
        }
    }


  return (
    <section className="custom-container signUp-container forms">
      <div className="custom-form login">
        <div className="custom-form-content">
          <header className="login">Sign Up</header>
          <form action="#">
            <div className="field input-field login">
              <input type="text"
                placeholder="Username"
                className="input-login"
                value = {userName}
                onChange={(e) => setUserName(e.target.value)}
                required />
            </div>
            <div className="field input-field login">
              <input type="email"
                placeholder="Email"
                className="input-login"
                value = {userEmailAddress}
                onChange={(e) =>setUserEmailAddress(e.target.value)}
                
                />
            </div>
            <div className="field input-field login">
              <input
                type="password"
                placeholder="Password"
                className="input-login"
                required
                value = {userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Age"
                className="input-login"
                required
                value = {userAge}
                onChange={(e) => setUserAge(e.target.value)}
              />
            </div>
            <div className="field input-field login">
              <input
                type="text"
                placeholder="Area of Interest"
                className="input-login"
                required
                value = {userAreaOfInterest}
                onChange={(e) => setUserAreaOfInterest(e.target.value)}
              />
            </div>
            <div className="field button-field login">
              <button className="login" onClick={handleRegister} >Sign Up</button>
            </div>
          </form>
          <div className="form-link login">
            <div className="redirect">
              Already have an account?{' '}
              <Link to="/login" className="signupLinking">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp