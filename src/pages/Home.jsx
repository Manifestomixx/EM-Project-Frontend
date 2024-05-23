import React, { useEffect, useState } from "react";
import profilepic from "../assets/manpic.png";
import locationicon from "../assets/location (1).png";
import Bag from "../assets/ph_briefcase-light.png";
import Twitter from "../assets/pajamas_twitter.png";
import LinkedIn from "../assets/circum_linkedin.png";
import Man from "../assets/manpic.png";
import imgicon from "../assets/gallery.png";
import NavBarMobile from "../layout/NavBarMobile";
import { data } from "../../Db";
import { Link } from "react-router-dom";
import PostModal from "../components/PostModal";
import { Spinner } from "react-bootstrap";
import "../style/Home.css";
import CommentModal from "../components/CommentModal";



const Home = () => {
  
  
  useEffect(() => {
    document.title = "Home | Page";
  });
  console.log(data);
 

  return (
    <>
      <main className="container-fluid bg-light">
      
        <section className="container">
          <div className="row ">
            <div className="bg-white rounded mt-3 h-50 stick1 col-lg-4 d-none d-lg-block ">
              <div className="d-flex align-items-center mt-3 gap-3">
                <img
                  src={profilepic}
                  alt="profile-image"
                  className="img-fluid rounded-circle profile1"
                />
                <div className="my-1">
                  <h3>John Doe</h3>
                  <p>0 Friends</p>
                </div>
              </div>
              <hr />
              <div>
                <h2>Bio</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi nec turpis
                  vulputate sed. Tellus quisque pharetra facilisi nisl nisi
                  consectetur. Sed in nisi convallis vitae tortor rhoncus.
                </p>
              </div>
              <hr />
              <div>
                <h2>Info</h2>
                <div>
                  <div className="d-flex align-items-center gap-3">
                    <img src={locationicon} alt="location-icon" className="" />
                    <p>Lagos, Nigeria</p>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img src={Bag} alt="bag-icon" />
                    <p>Realtor</p>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <h2>Socials</h2>
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src={Twitter} alt="twittwer-icon" />
                    <p>Twitter</p>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <img src={LinkedIn} alt="linkedin-icon" />
                    <p>LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded mt-3 d-flex flex-wrap gap-2 col-lg-8">
              <div className="bg-white w-100">
                <div className="d-flex search gap-3 p-3 ">
                  <img
                    src={Man}
                    alt="profile-pics"
                    className="img-fluid profile rounded-circle "
                  />
                  <input
                    type="text"
                    placeholder="What do you want to ask or share?"
                    className="bg-light rounded-5  w-100 shift"
                  />
                </div>
                <div className="d-flex  justify-content-between p-3 ">
                  <img src={imgicon} role="button" alt="image-icon" />
                  {/* <Link to={"../Post"}>
                  </Link> */}
                  <PostModal/>
                    
                </div>
              </div>
              
              {data.map((datum) => {
                const {
                  id,
                  title,
                  time,
                  description,
                  image,
                  profile,
                  statusbar,
                  icon,
                  icon2,
                  icon3,
                } = datum;
                return (
                  <div
                    key={id}
                    className="p-3 my-2 bg-white rounded d-flex flex-column"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        <img
                          src={profile}
                          alt="profile-image"
                          className=" imgmobile imglg rounded-pill"
                        />
                        <div>
                          <Link
                            to={"../FriendProfile"}
                            className="text-decoration-none text-black"
                          >
                            <h3 role="button" className="title">{title}</h3>
                          </Link>

                          <h6 className="time">{time}</h6>
                        </div>
                      </div>
                      <button className="btn status btn-white border rounded-5 button1 ">
                        {statusbar}
                      </button>
                    </div>
                    <p className="mt-2 description">{description}</p>
                    <img src={image} alt="feed-image" className="img-fluid" />
                    <div
                      role="button"
                      className="d-flex justify-content-between mt-2"
                    >
                      <div className="d-flex gap-2">
                        <img src={icon} alt="heart-icon" className="icon" />
                        {/* <Link to={"../Comments"}>
                        </Link> */}
                          <CommentModal/>
                        {/* <img src={icon2} alt="message-icon"  className="icon"/> */}
                      </div>
                      <img src={icon3} alt="send-icon" className="icon" />
                    </div>
                  </div>
                );
              })}
              <div>
                {/* <div className="d-flex flex-wrap gap-3">
            <Fetch/>
            </div> */}
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
};

export default Home;
