import React from 'react';
import "./style.css";
import Button from '../../Components/Button';
import {useNavigate} from "react-router-dom"

const Landing = () => {

  const navigate = useNavigate()

  const loginNav = () => {
    navigate("/login")
  }
  
  const signupNav = () => {
    navigate("/signup")
  } 

  return (
     <div className="container">
        <div className="content">
           <p className="heading">Welcome to PopX</p>
           <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
           <div className="button-container">
              <Button
                 handleClick={signupNav}
                 text="Create Account"
                 className="create-btn"
              />
              <Button
                 handleClick={loginNav}
                 text="Already Registered? Login"
                 className="register-btn"
              />
           </div>
        </div>
     </div>
  );
}

export default Landing