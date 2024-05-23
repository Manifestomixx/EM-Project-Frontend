import React from "react";
import Form from "react-bootstrap/Form";
import EMLogo from "../assets/em-logo.png";
import Image from "../assets/log.png";
import "../style/SignIn.css";
import { IoMailOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

const ForgotPassword = () => {
  return (
    <>
      <main className="container">
        <section className="d-flex border justify-content-center row my-5 ">
          {/* section for hero */}
          <div className="bg-light px-5 text-center py-5 d-none d-md-block col-md-6">
           
            <img src={Image} className="img-fluid w-100" alt="signup-image" />
          </div>

          <div className=" bg-white m-auto p-5  col-md-6">
            {/* section for form */}
            <div className="">
              <div className="text-center ">
              <Link to={"../SignIn"} role="button" >
                <img src={EMLogo} alt="" className="mb-2" />
            </Link>
                <h1 className="fs-2">Forgot Password</h1>
                <p className="mb-4 fw-semibold">Enter email address to recover password</p>
              </div>
              <Form>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="formGroupEmail"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="bg-light shift1"
                  />
                  <div className="position-absolute top-50 start-0 translate-middle-y p-2 text-primary ">
                    <IoMailOutline className="my-5  " />
                  </div>
                </Form.Group>
              </Form>
              <button className="btn btn-primary w-100 rounded-5">
                Recover Password
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForgotPassword;
