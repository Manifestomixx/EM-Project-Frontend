import React, { useState, useCallback, useEffect } from "react";
import image from "../assets/brandlogo.svg";
import { RiSearchLine } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import home from "../assets/home.png";
import community from "../assets/Group_duotone_line.png";
import bell from "../assets/Bell_duotone_line.png";
import man from "../assets/manpic.png";
import { Outlet, Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "../style/NavBar.css";
import AuthDropDown from "../auth/AuthDropDown";
import OffCanvas from "../components/OffCanvas";
import debounce from "lodash.debounce";



const NavBar = () => {
  // updating profile-pic
  const [bioProfile,setBioProfile] = useState([]);
  
  const [authShow, setAuthshow] = useState(false);
  // for search bar to work
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
        setBioProfile(response.user)
        
      } catch (error) {
        console.log(error.message);
      }
    }

  // for search logic 20-05-2024
  const performSearch = useCallback(
    async (term) => {
      if (term) {
        try {
          const request = await fetch(
            `https://em-project-backend-tur2.onrender.com/api/v1/users/search?searchTerm=${term}`,
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const response = await request.json();
          if (response.success) {
            setSearchResults(response.users);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.log(error.message);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    },
    [token]
  );
  const debouncedSearch = useCallback(
    debounce((term) => {
      performSearch(term);
    }, 3000),
    [performSearch]
  );
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  useEffect(() => {
    // document.title = "Home | Page";
    
    getBioProfile()
  },[]); 

  return (
    <>
      <main className="container-fluid ">
        <nav className="container">
          <div className=" d-md-flex justify-content-between mt-4">
            <div className="d-md-flex gap-3  ">
              <img
                src={image}
                alt="EM-logo"
                className="img-fluid logo imgsize  bg-white mt-3 "
              />
              <Form className="mt-3">
                <Form.Group
                  className="mb-3 position-relative d-none d-lg-block"
                  controlId="formGroupEmail"
                >
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="bg-light rounded-5 shift3 "
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <div className="position-absolute top-50 start-0 translate-middle-y p-2 text-secondary ">
                    <RiSearchLine className="my-5  " />
                  </div>
                  <div>
                    {searchTerm && (
                      <div className="search-results position-absolute z-1 bg-secondary text-white border rounded w-100">
                        {searchResults.length ? (
                          searchResults.map((user) => (
                            <div key={user._id} className="search-result-item">
                              <Link
                                className="text-decoration-none text-white"
                                to={`/singleuserprofile/${user._id}`}
                              >
                                {user.userName}
                              </Link>
                            </div>
                          ))
                        ) : (
                          <div className="search-no-results">
                            No results found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Form.Group>
              </Form>
            </div>
            <div className="d-flex nav1 justify-content-sm-between gap-3 text-center">
              <div>
                <Link to="../Hero">
                  <img src={home} alt="home-icon" className="profile" />
                </Link>
                <p className="d-none d-lg-block ">Home</p>
              </div>
              <div>
                <Link
                  to="../Community"
                  className="text-decoration-none text-black "
                >
                  <img
                    src={community}
                    alt="community-icon"
                    role="button"
                    className="profile"
                  />
                  <p className=" d-none d-lg-block">Community</p>
                </Link>
              </div>
              <div>
                <img
                  src={bell}
                  alt="community-icon"
                  className="profile d-md-none d-block"
                />
                <p className="d-none d-block">Notification</p>
              </div>
              <div className="d-sm-none d-block">
                <OffCanvas />
              </div>
              <div className="d-none d-md-block">
                <img
                  src={bioProfile.profilePhoto}
                  alt="notification-icon"
                  className="img-fluid profile rounded-circle"
                />

                {/* dropdown */}
                <div
                  className="position-relative d-flex align-items-center"
                  role="button"
                  onClick={() =>
                    !authShow ? setAuthshow(true) : setAuthshow(false)
                  }
                >
                  <p className="d-none d-lg-block">Me </p>
                  {!authShow ? (
                    <div className="d-none d-lg-block text-secondary mb-3">
                      <IoIosArrowUp />
                    </div>
                  ) : (
                    <div className="d-none d-lg-block mb-3 text-secondary">
                      <IoIosArrowDown />
                    </div>
                  )}
                  <div className="position-absolute top-100 end-0 mt-2">
                    {authShow && <AuthDropDown />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
