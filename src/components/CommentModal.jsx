import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import comment from '../assets/messages-2.png';
import { Link } from "react-router-dom";
import { comments } from "../../Db";
import "../style/Comment.css";

const CommentModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
      <img src={comment} alt="" onClick={handleShow} className='icon'/>
    </div>
    

      <Modal
      size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body className='' >
        <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="Type here..."
            className="rounded-4 textedit border-secondary w-100 bg-light"
          ></textarea>
          <div className='d-flex justify-content-end mt-2'>

<Button  className='btn button1 postbtn btnLength text-white  rounded-5' onClick={handleClose}>
  Post
</Button>
</div>
          <div>
          <h5 className="fw-bold mt-3">Previous comments</h5>
          <div>
            {comments.map((comment) => {
              const { id, title, profile, time, statusbar, description } =
                comment;
              return (
                <div key={id} className='border rounded my-2 p-2'>
                  <div className="d-flex justify-content-between  align-items-center">
                    <div className="d-flex gap-2">
                      <img
                        src={profile}
                        alt="profile-img"
                        className="rounded-pil1 commentImg img-fluid"
                      />
                      <div>
                        <h2 className="title">{title}</h2>
                        <h6>{time}</h6>
                      </div>
                    </div>
                    <button className="btn btn-white border rounded-5 button1 ">
                      {statusbar}
                    </button>
                  </div>

                  <p className="mt-2 ">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
        </Modal.Body>
        
        
      </Modal>
    </>
  )
}

export default CommentModal