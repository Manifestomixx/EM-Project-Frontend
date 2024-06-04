import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import railwaypic from "../assets/railway.png"
import shippic from "../assets/ship.png"
import platespic from "../assets/plates.png";
import closeicon from "../assets/close-circle.png";
import imgicon from "../assets/gallery.png";
import "../style/Post.css"


const PostModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    {/* <Button variant="primary" className='btn button1 postbtn text-white  rounded-5' >
        Post
      </Button> */}
      <img src={imgicon} alt="gallery-icon" onClick={handleShow} />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
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
        <img src={platespic} alt="plates-pic" className='img-fluid '/>
        <img src={closeicon} alt="close-icon" className='position-absolute end-0 p-2' />
        </div>
      </div>
      <div className='d-flex justify-content-end'>
      

      </div>
        
        <div className='d-flex justify-content-end p-'>

          <Button  className='btn button1 postbtn  text-white  rounded-5' onClick={handleClose}>
            Post
          </Button>
        </div>
        </Modal.Body> 
      </Modal>
    </>
  )
}

export default PostModal