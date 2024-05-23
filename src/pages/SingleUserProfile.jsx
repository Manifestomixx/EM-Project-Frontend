import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Bio from '../components/Bio';
import followingicon from "../assets/followers.png"
import followericon from "../assets/following.png"
import "../style/Home.css"

const SingleUserProfile = () => {
    const [data,setData] = useState([])
    const {userId} = useParams();
    console.log(userId);
    const getData = async()=>{
        const request = await fetch(`https://em-project-backend-tur2.onrender.com/api/v1/users/userprofile/${userId}`);
        const response = await request.json();
        console.log(response.user);
        setData(response.user)
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    <main className='container'>
        <div className='row'>
            <section className='border  bg-white rounded mt-3 h-50 stick1 col-lg-4 d-none d-lg-block'>
              <Bio/> 
              <div className='d-flex gap-3 ms-3 text-center'>
              <img src={followericon} alt=""className="icons2" />
              <p>{data?.followers?.length} Followers</p> 
              </div>
              <div className='d-flex gap-3 my-2 ms-3 text-center'>
              <img src={followingicon} alt="" className="icons2"/>
              <p>{data?.following?.length} Following</p> 
              </div>
            </section>
            <section className='mt-3  col-lg-8'>
                <h2>Single user</h2>
            </section>
        </div>
    </main>
    
    
    </>
  )
}

export default SingleUserProfile