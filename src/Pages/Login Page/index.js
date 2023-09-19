import React from 'react';
import "./style.css";
import {useNavigate} from "react-router-dom"
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const Login = () => {

  const navigate = useNavigate();

  const profileNav = () => {
    navigate("/profile");
  }


  return (
     <div className="container">
        <div className="login-content">
           <p className="heading login-heading">Signin to your PopX account</p>
           <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           </p>
           <form className='login-form'>
             <label className="input-label email" htmlFor="email">
                Email Address
             </label>
             <Input id="email" type="email" placeholder="Enter email address" />

             <label className="input-label password" htmlFor="password">
                Password
             </label>
             <Input id="password" type="password" placeholder="Enter password" />
             
             <Button handleClick={profileNav} text="Login" className="login login-btn" />
           </form>
        </div>
     </div>
  );
}

export default Login