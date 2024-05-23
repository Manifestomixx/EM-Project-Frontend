import React,{useState} from 'react';
import edit from '../assets/edit-2.png';
import bell from '../assets/notification.png';
import logout from '../assets/logout.png';
import { Link,useNavigate } from 'react-router-dom';
import Registration from '../pages/Registration';
import EditProfileModal from '../components/EditProfileModal';
import { CgProfile } from "react-icons/cg";



const AuthDropDown = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  // const [showModal, setShowModal] =useState(false);
  // const handleImageClick =()=>{
  //     setShowModal(true);
  // };
  // const handleCloseModal = ()=>{
  //     setShowModal(false);
  // };


  const logOut = ()=>{
    localStorage.removeItem("clientToken")
    navigate("/")
  }
  return (
    <>
    <main  className='p-3 rounded-4 shadow bg-white'>
      <div className='d-flex flex-column'>

      <Link to="../Profile" className="text-decoration-none text-black">
            <div className="d-flex gap-2">
              <div className="">
              <CgProfile className="iconsSize"/>
              </div>
              <p>Profile</p>
            </div>
            </Link>
            <hr />

        {/* edit profile */}
      <div className='d-flex align-items-center gap-2'>
        <img src={edit} alt="edit-icon"  />
        <div className='mt-2'>
        <EditProfileModal/>
        </div>
      
      </div>
    
      <hr />
      {/* notification */}
      <div className='align-items-center d-flex gap-2'>
        <img src={bell} alt="bell-icon" /> 
        <p className='my-1'>Notification</p>
      </div>
      <hr />

      {/* log out */}
      <div className='d-flex align-items-center gap-2'>
        <img src={logout} alt="logout-icon" />
        {/* <Link to={"../"} className='text-decoration-none text-black'>
        </Link> */}
        <p className='my-1' onClick={logOut}>Log Out</p>
      </div>
      <hr />

      </div>
    </main>
    
    </>
  )
}

export default AuthDropDown