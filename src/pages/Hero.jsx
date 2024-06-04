import React, { useEffect, useState } from "react";
import profilepic from "../assets/manpic.png";
import locationicon from "../assets/location (1).png";
import Bag from "../assets/ph_briefcase-light.png";
import Twitter from "../assets/pajamas_twitter.png";
import LinkedIn from "../assets/circum_linkedin.png";
import Man from "../assets/manpic.png";
import imgicon from "../assets/gallery.png";
import NavBarMobile from "../layout/NavBarMobile";
import send from "../assets/send-icon.png";
import heart from "../assets/heart-empty.png";
import { data } from "../../Db";
import { Link } from "react-router-dom";
import PostModal from "../components/PostModal";
import { Spinner } from "react-bootstrap";
import "../style/Home.css";
import CommentModal from "../components/CommentModal";
import Bio from "../components/Bio";

import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "../utility/ValidationSchema";
import {useForm} from 'react-hook-form';
import toast from "react-hot-toast";
import TimeAgo from "../components/TimeAgo";


import EditProfileModal from "../components/EditProfileModal";

const Hero = () => {
  const [timeLine,setTimeLine] = useState([])
  

  
  // updating profile-pic
  const [bioProfile,setBioProfile] = useState([]);
  
  
  const token = localStorage.getItem("clientToken");
   // const bioProfile = 
    
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
      setBioProfile(response.user);
      // getBioProfile();
      
    } catch (error) {
      console.log(error.message);
    }
  };

  // trial
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors,isSubmitting},
  } = useForm({resolver:yupResolver(postSchema),
    defaultValues:{
      text:""
    
    }
  });

  // const token = localStorage.getItem("clientToken");
  const handlePost = async(data)=>{
    try {
      const request = await fetch("http://localhost:5320/api/v1/posts/create-post",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(data)
      });
      const response = await request.json();
      console.log(response);
      // if(!res.success){
      //   toast.error(res.message)
      // }
      if(response.success){
        reset();
        toast.success(response.message);
        getTimeLine()
      }
      
     
    } catch (error) {
      console.log(error);
    }
  };


  // Timeline
  const getTimeLine = async () => {
      
    try {
      // setIsLoading(true);
      const request = await fetch("http://localhost:5320/api/v1/posts/timeline", {
          headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
          },
      });
      const response = await request.json();
      console.log(response.posts);
      setTimeLine(response?.posts || []); 
      
  } catch (error) {
      console.log(error.message);
  }finally{
      // setIsLoading(false);

  }
};

  
 
  

  
  useEffect(() => {
    document.title = "Home | Page";
    
    getBioProfile();
    handlePost();
    getTimeLine();
  },[]);
  return (
    <>
    <main className="container-fluid bg-light">

      {/* {bioProfile.map((data)=>{
        return(
          <>
          
          
          </>
        )
      })} */}
      
      <section className="container">
        <div className="row ">
          <div className="bg-white rounded mt-3 h-50 stick1 col-lg-4 d-none d-lg-block ">
          <Bio/>
          </div>
          

          <div className="rounded mt-3 d-flex flex-wrap gap-2 col-lg-8">
            <form className="bg-white w-100" onSubmit={handleSubmit(handlePost)}>

              <div className="d-flex search gap-3 p-3 ">
                <img
                  src={bioProfile.profilePhoto}
                  alt="profile-pics"
                  className="img-fluid profile rounded-circle "
                />
                <input
                  type="text"
                  placeholder="What do you want to ask or share?"
                  className="bg-light rounded-5 w-100 shift"
                  // value={post}
                  // onChange={(e) => setPost(e.target.value)}
                  {...register("text",{ required: true })}
                />
              </div>
                <p className="text-danger text-center">
               {errors.text?.message}
                </p>
              <div className="d-flex  justify-content-between p-3 ">
                <PostModal/>
                <button className="btn btn-primary rounded-5 button1 postbtn" onClick={handleSubmit}>Post</button>
                <EditProfileModal/>
              </div>
            {/* <div className="bg-white w-100">
            </div> */}
            </form>
            {timeLine.length < 1 && <p>No Posts Yet, create a post or follow others to see posts on your timeline🥰</p> }
            {timeLine.map((datum) => {
              const {
                _id,
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
                  key={_id}
                  className="p-3 my-2 bg-white rounded d-flex flex-column w-100"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <img
                        src={datum.user.profilePhoto}
                        alt="profile-image"
                        className=" imgmobile imglg rounded-pill"
                      />
                      <div>
                        <Link
                          to={"../FriendProfile"}
                          className="text-decoration-none text-black"
                        >
                          <h3 role="button" className="title">{datum.user.userName}</h3>
                        </Link>

                        {/* <h6 className="time">{time}</h6> */}
                        <p><TimeAgo date={datum?.createdAt}/> </p>
                        
                      </div>
                    </div>
                    <button className="btn status btn-white border rounded-5 button1 ">
                      following
                    </button>
                    {/* <button className="btn status btn-white border rounded-5 button1 ">
                      {statusbar}
                    </button> */}
                  </div>
                  <p className="mt-2 description">{datum.text}</p>
                  <img src={datum.imagePath} alt="feed-image" className="img-fluid" />
                  <div
                    role="button"
                    className="d-flex justify-content-between mt-2"
                  >
                    <div className="d-flex gap-2">
                      <img src={heart} alt="heart-icon" className="icon" />
                      <CommentModal/>
                      {/* <Link to={"../Comments"}>
                      <img src={icon2} alt="message-icon"  className="icon"/>
                      </Link> */}
                    </div>
                    <img src={send} alt="send-icon" className="icon" />
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
  )
}

export default Hero