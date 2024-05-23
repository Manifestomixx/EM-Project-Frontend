import React, { useState } from 'react';
import railwaypic from "../assets/railway.png"
import shippic from "../assets/ship.png"
import platespic from "../assets/plates.png";
import closeicon from "../assets/close-circle.png";
import "../style/Post.css"


const Post = () => {
  
  
  return (
    <>
    
    <main className='container-fluid'>
  
      <div className=' container shadow rounded-5 my-3 p-3'>
      <div className='w-100'>
        <textarea name="" id="" cols="50" rows="10" placeholder='Write post'className='border text rounded-2 w-100 '></textarea>
      </div>
      <div className=' gap-3 d-md-flex my-3'>
        {/* img 1 */}
        <div className='position-relative'>
        <img src={railwaypic} alt="railway-pic" className='img-fluid '/>
        <img src={closeicon} alt="close-icon" className='position-absolute end-0 p-2' />
        </div>

        {/* img 2 */}
        <div className='position-relative '>

        <img src={shippic} alt="ship-pic" className='  img-fluid  '/>
        <img src={closeicon} alt="close-icon" className='position-absolute end-0 p-2' />
        </div>

        {/* img 3 */}
        <div className='position-relative'>
        <img src={platespic} alt="plates-pic" className='img-fluid  '/>
        <img src={closeicon} alt="close-icon" className='position-absolute end-0 p-2' />
        </div>
      </div>
      <div className='d-flex justify-content-end'>
      <button className="btn btn-primary rounded-5 btnLength " >Post</button>

      </div>

      </div>
    </main>
    </>
    
  )
}

export default Post