import React, { useState,useEffect } from 'react'
import profilepic from "../assets/manpic.png";
import locationicon from "../assets/location (1).png";
import Bag from "../assets/ph_briefcase-light.png";
import Twitter from "../assets/pajamas_twitter.png";
import LinkedIn from "../assets/circum_linkedin.png";

const Bio = () => {
  const [bioProfile,setBioProfile] = useState([]);

   // const bioProfile = 
  const token = localStorage.getItem("clientToken")
  const getBioProfile = async ()=>{
    try {
      const request = await fetch("https://em-project-backend-tur2.onrender.com/api/v1/users",{
        headers:{
          "Content-type":"application/json",
          Authorization:`Bearer ${token}`
        }
      })
      const response = await request.json();
      console.log(response.user);
      setBioProfile(response.user)
      
    } catch (error) {
      console.log(error.message);
    }
  }

  

  
  useEffect(() => {
    // document.title = "Home | Page";
    
    getBioProfile()
  },[]); 

  return (
    <>
    <main className='container '>

    <div>
            <div className="d-flex align-items-center mt-3 gap-3">
              <img
                src={bioProfile.profilePhoto}
                alt="profile-image"
                className="img-fluid rounded-circle profile1"
              />
              <div className="my-1">
                <h3>{bioProfile.userName}</h3>
                <h6 className="fw-none">0 Friends</h6>
              </div>
            </div>
            <hr />
            <div>
              <h2>Bio</h2>
              <p>{bioProfile.bio}</p>
            </div>
            <hr />
            <div>
              <h2>Info</h2>
              <div>
                <div className="d-flex align-items-center gap-3">
                  <img src={locationicon} alt="location-icon" className="icons" />
                  <p>{bioProfile.location}</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src={Bag} alt="bag-icon" className="icons" />
                  <p>{bioProfile.occupation}</p>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <h2>Socials</h2>
              <div className="mb-3">
                <div className="d-flex align-items-center gap-3">
                  <img src={Twitter} alt="twittwer-icon" className="icons" />
                  <p>{bioProfile.x}</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src={LinkedIn} alt="linkedin-icon" className="icons" />
                  <p className="text-center my-2">{bioProfile.linkedIn}</p>
                </div>
              </div>
            </div>
          </div>
    </main>
    </>
  )
}

export default Bio