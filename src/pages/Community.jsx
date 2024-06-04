import React, { useEffect, useState } from "react";
import Bio from "../components/Bio";
import { Link } from "react-router-dom";
import { Prev } from "react-bootstrap/esm/PageItem";
import toast from "react-hot-toast";

const Community = () => {
  const [data, setdata] = useState([]);
  const [currentUser,setCurrentUser] = useState(null);
  const token = localStorage.getItem("clientToken");



  const getUsers = async () => {
    const request = await fetch("https://em-project-backend-tur2.onrender.com/api/v1/users/all");
    const response = await request.json();
    console.log(response.users);
    setdata(response.users);
  };

  // 27 may 2024
  const getCurrentUser = async ()=>{
    try {
      const request = await fetch("https://em-project-backend-tur2.onrender.com/api/v1/users",{
        headers:{
          "Content-Type" : "application/json",
          Authorization:`Bearer ${token}`,
        },
      });
      const response = await request.json();
      if(response.success){
        setCurrentUser(response.user);
      }else{
        console.error(response.message);
      }
    } catch (error) {
      console.error("Failed to fetch current user:",error);
    }
  };

  // follow function
  const handleFollow = async (userId)=>{
    if(!currentUser) return;
    try {
      const response = await fetch(`https://em-project-backend-tur2.onrender.com/api/v1/users/follow/${userId}`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: currentUser._id}),
      });
      const result = await response.json();
      console.log(result);
      if (result.success){
        setdata((prevData) =>
          prevData.map((user) =>
            user._id === userId
              ? { ...user, followers: [...user.followers, currentUser._id] }
              : user
          )
        );
        toast.success(result.message)
      } else {
        console.error(result.message);
        toast.error(result.message)
      };
    } catch (error) {
      console.error("Failed to follow user:",error);
    }
  };

  // unfollow function
  const handleUnfollow = async (userId)=>{
    if (!currentUser) return;
    try {
      const response = await fetch(`https://em-project-backend-tur2.onrender.com/api/v1/users/unfollow/${userId}`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: currentUser._id}),
      });
      const result = await response.json();
      console.log(result);
      if (result.success){
        setdata((prevData) =>
          prevData.map((user) =>
            user._id === userId
              ? { ...user, followers: user.followers.filter((id)=> id !== currentUser._id) }
              : user
          )
        );
        toast.success(result.message)
      } else {
        console.error(result.message);
        toast.error(result.message)
      };
    } catch (error) {
      console.error("Failed to unfollow user:",error);
    }
  }

  useEffect(() => {
    getCurrentUser();
    if(token){
      getCurrentUser();
    }
    getUsers();
    document.title = "community | page";
  }, [token]);
  return (
    <>
      <main className="container">
        <section className="row">
          <div className="border   bg-white rounded mt-3 h-50 stick1 col-lg-4 d-none d-lg-block ">
            <Bio />
          </div>
          <div className="rounded mt-3 col-lg-8">
            {/* <h1>community for all users</h1> */}
            <div>
              {data && data.length >= 1 ? (
                <>
                  {data?.map((datum) => {
                    const { profilePhoto, followers, userName, _id } = datum;
                    // for following
                    const isFollowing = followers.includes(currentUser?._id);

                    return (
                      <div
                        key={_id}
                        className="d-flex justify-content-between border mb-3 align-items-center p-4"
                      >
                        <Link className="text-decoration-none text-black" to={`/singleuserprofile/${_id}`}>
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={profilePhoto}
                            alt=""
                            className="profile-img"
                            style={{
                              borderRadius: "5rem",
                              height: "4rem",
                              width: "4rem",
                            }}
                          />
                          <div className="d-flex flex-column ">
                
                            <span className=""> {userName} </span>
                            <span className="">
                              {followers?.length} follower
                            </span>
                          </div>
                        </div>
                            </Link>
                          
                          <div>
                          {isFollowing ? (
                            <button className="btn rounded-5 border" onClick={() => handleUnfollow(_id)}>
                              Following
                            </button>
                          ) : (
                            <button className="btn rounded-5 border" onClick={() => handleFollow(_id)}>
                              Follow +
                            </button>
                          )}
                          </div>
                        {/* <div>
                          <button className="btn rounded-5 border">
                            follows +
                          </button>
                        </div> */}
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <h2>No users yet</h2>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Community;
