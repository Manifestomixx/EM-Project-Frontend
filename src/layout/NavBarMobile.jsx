import React from 'react';
import home from "../assets/home.png";
import community from "../assets/Group_duotone_line.png";
import bell from "../assets/Bell_duotone_line.png";
import man from "../assets/man.jpeg";
import "../style/NavBar.css";

import { Outlet } from 'react-router-dom';

const NavBarMobile = () => {
  return (
    <>
    <nav className='container bg-black text- position-static my-3 d-flex d-lg-none'>
    <div className="d-flex gap-5 text-center">
          <div>
            <img src={home} alt="home-icon" className="profile" />
            <p className='d-none'>Home</p>
          </div>
          <div>
            <img src={community} alt="community-icon" className="profile" />
            <p className='d-none'>Community</p>
          </div>
          <div>
            <img src={bell} alt="community-icon" className="profile " />
            <p className='d-none'>Notification</p>
          </div>
          <div className="">
            <img src={man} alt="notification-icon" className="img-fluid profile rounded-circle" />
            <p className='d-none'>Me</p>
          </div>
            
          </div>
          
        
    </nav>
    
    </>
  )
}

export default NavBarMobile