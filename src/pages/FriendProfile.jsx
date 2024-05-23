import React, { useEffect } from "react";
import friendpic from "../assets/friend.png";
import locationicon from "../assets/location.png";
import Bag from "../assets/ph_briefcase-light.png";
import Twitter from "../assets/pajamas_twitter.png";
import LinkedIn from "../assets/circum_linkedin.png";
import followingicon from "../assets/following.png";
import follwersicon from "../assets/followers.png";
import likeicon from "../assets/like.png";
import "../style/FriendProfile.css";
import NavBarMobile from "../layout/NavBarMobile";
import { FriendsData } from "../../Db";
import { Link } from "react-router-dom";

import Fetch from "../components/Fetch";
import friend from "../assets/friend.png";
import imgicon from "../assets/gallery.png";
import CommentModal from "../components/CommentModal";

const FriendProfile = () => {
  return (
    <>
    <main className="container-fluid bg-light">
        <section className="container">
          <div className="row ">
            <div className="bg-white rounded mt-3 h-50 stick1 col-md-4 d-none d-md-block ">
              <div className="d-flex align-items-center mt-3 gap-3">
                <img
                  src={friendpic}
                  alt="profile-image"
                  className="img-fluid rounded-circle profile1"
                />
                <div className="my-1">
                  <h3>Yuji Itadori</h3>
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

              {/* activity */}
              <div className="d-flex flex-column gap-2">
                <h2>Activies</h2>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                  <img src={follwersicon} alt="followersicon" className="center" />
                  <p>Followers</p>
                  </div>
                  <p>1000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                  <img src={followingicon} alt="following-icon" className="center img-fluid"/>
                  <p>Following</p>
                  </div>
                  <p>1000</p>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="d-flex gap-2">
                  <img src={likeicon} alt="likes-icon"className="center" />
                  <p>Likes</p>
                  </div>
                  <p>1000</p>
                </div>
              </div>
              <hr />
              <div>
                <h2>Info</h2>
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <img src={locationicon} alt="location-icon" className=""/>
                    <p className="pt-3">Lagos, Nigeria</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src={Bag} alt="bag-icon" className="" />
                    <p className="pt-3">Realtor</p>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <h2>Socials</h2>
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <img src={Twitter} alt="twittwer-icon" />
                    <p className="pt-3">Twitter</p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src={LinkedIn} alt="linkedin-icon" />
                    <p className="pt-3">LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* section two */}
            <div className="rounded mt-2 d-flex flex-wrap gap-2 col-md-8">
              {/* <div className="bg-white w-100">
                <div className="d-flex gap-3 p-3 ">
                  <img
                    src={friend}
                    alt="profile-pics"
                    className="img-fluid profile rounded-circle "
                  />
                  <input
                    type="text"
                    placeholder="What do you want to ask or share?"
                    className="bg-light rounded-5 w-100 shift"
                  />
                </div>
                <div className="d-flex justify-content-between p-3">
                  <img src={imgicon} role="button" alt="image-icon" />
                  <button className="btn button1 postbtn text-white  rounded-5">Post</button>
                </div>
              </div> */}
              {FriendsData.map((friend) => {
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
                } = friend;
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
                          className="border profile imglg rounded-pill"
                        />
                        <div>
                        <Link to={"../FriendProfile"} className="text-decoration-none text-black "><h2 role="button" className="title">{title}</h2></Link>
                          
                          <h6 className="time">{time}</h6>
                        </div>
                      </div>
                      <button className="btn btn-white border rounded-5 button1 status ">
                        {statusbar}
                      </button>
                    </div>
                    <p className="mt-2 description">{description}</p>
                    <img src={image} alt="feed-image" className="img-fluid" />
                    <div role="button" className="d-flex justify-content-between mt-2">
                      <div  className="d-flex gap-2">
                      <img src={icon} alt="heart-icon" className="icon" />
                      
                        <div>
                        <CommentModal/>
                      {/* <img src={icon2} alt="message-icon" className="icon" /> */}
                        </div>
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
        <NavBarMobile />
      </main>
    </>
  )
}

export default FriendProfile