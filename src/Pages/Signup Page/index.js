import React from 'react'
import "./style.css";
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useNavigate} from "react-router-dom"

const Signup = () => {

  const navigate = useNavigate();

  const profileNav = () => {
     navigate("/profile");
  };

  return (
     <div className="container">
        <div className="signup-content">
           <p className="heading signup-heading">Create your PopX account</p>
           <form className="signup-form">
              <label className="signup-label name" htmlFor="name">
                 Full Name
              </label>
              <Input id="name" type="text" placeholder="Enter your name" />

              <label className="signup-label phone" htmlFor="phone">
                 Phone number
              </label>
              <Input
                 id="phone"
                 type="number"
                 placeholder="Enter your phone number"
              />

              <label className="signup-label email" htmlFor="email">
                 Email Address
              </label>
              <Input
                 id="email"
                 type="email"
                 placeholder="Enter email address"
              />

              <label className="signup-label password" htmlFor="password">
                 Password
              </label>
              <Input
                 id="password"
                 type="password"
                 placeholder="Enter password"
              />

              <label className="signup-label company" htmlFor="company">
                 Company name
              </label>
              <Input
                 id="company"
                 type="text"
                 placeholder="Enter company name"
              />

              <div>
                 <p>Are you an Agency?</p>
                 <div className="radio-container">
                    <Input type="radio" id="yes" name="agency" />
                    <label htmlFor="yes">Yes</label>
                    <Input type="radio" id="no" name="agency" />
                    <label htmlFor="no">No</label>
                 </div>
              </div>

              <Button
                 handleClick={profileNav}
                 text="Create Account"
                 className="create-btn"
              />
           </form>
        </div>
     </div>
  );
}

export default Signup