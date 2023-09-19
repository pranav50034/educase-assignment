import React from 'react';
import user from "../../assets/5856.jpg"
import { AiFillCamera } from "react-icons/ai";
import "./style.css";

const Profile = () => {
  return (
     <div className="container">
        <div className="profile-content">
           <div className="head">
              <p>Account Settings</p>
           </div>
           <div className="profile-section">
              <div className="img-div">
                 <img style={{ width: "100px", aspect: 1 }} src={user} />
                 <div className="icon-div">
                    <AiFillCamera className="icon" />
                 </div>
              </div>
              <div className="name-div">
                 <p>Marry Doe</p>
                 <p>Marry@Gmail.com</p>
              </div>
           </div>
           <p className='description'>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
           </p>
        </div>
     </div>
  );
}

export default Profile