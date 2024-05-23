import React, { useState, useEffect } from "react";
import profile from "../assets/manpic.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import profilepic from "../assets/manpic.png";
import edit from "../assets/edit-2.png";
import bell from "../assets/notification.png";
import logout from "../assets/logout.png";
import EditProfileModal from "./EditProfileModal";
import { CgProfile } from "react-icons/cg";

const OffCanvas = ({ ...props }) => {
  // updating profile-pic
  const [bioProfile, setBioProfile] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = localStorage.getItem("clientToken");
  // const bioProfile =

  const getBioProfile = async () => {
    try {
      const request = await fetch("https://em-project-backend-tur2.onrender.com/api/v1/users", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      console.log(response.user);
      setBioProfile(response.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    document.title = "Home | Page";

    getBioProfile();
  }, []);

  return (
    <>
      <div>
        <img
          src={bioProfile.profilePhoto}
          alt=""
          onClick={handleShow}
          className="me-2 rounded-5 profile"
        />
      </div>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center gap-3 mb-5">
            <img
              src={bioProfile.profilePhoto}
              alt="profile-image"
              className="img-fluid rounded-circle profile1"
            />
            <div className="my-1 mt-3">
              <h3>{bioProfile.userName}</h3>
              <p>0 Friends</p>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Link to="../Profile" className="text-decoration-none text-black">
            <div className="d-flex gap-2">
              <div className="">
              <CgProfile className="iconsSize"/>
              </div>
              <p>Profile</p>
            </div>
            </Link>
            <hr />
            <div className="d-flex text-center align-items-center gap-2">
              <img src={edit} alt="edit-icon" />
              <p className="mt-"><EditProfileModal/></p>
              {/* <Link to={"../Profile"} className='text-decoration-none text-black'>
        <p className='my-1'>Edit Profile</p>
        </Link> */}
            </div>
            <hr />
            <div className="text-center align-items-center d-flex gap-2">
              <img src={bell} alt="bell-icon" />
              <p className="my-1">Notification</p>
            </div>
            <hr />
            <div className="d-flex align-items-center gap-2">
              <img src={logout} alt="logout-icon" />
              <Link to={"../"} className="text-decoration-none text-black">
                <p className="my-1">Log Out</p>
              </Link>
            </div>
            <hr />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
