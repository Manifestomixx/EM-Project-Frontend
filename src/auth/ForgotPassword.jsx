import React from "react";
import Form from "react-bootstrap/Form";
import EMLogo from "../assets/em-logo.png";
import Image from "../assets/log.png";
import "../style/SignIn.css";
import { IoMailOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../utility/ValidationSchema";
import {useForm} from 'react-hook-form';
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting},
  } = useForm({resolver:yupResolver(forgotPasswordSchema),
    defaultValues:{
      email:""
    
    }
  });
  const handleForgotPassword = async(data)=>{
    try {
      const request = await fetch("http://localhost:5320/api/v1/auth/forgotpassword",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });
      const response = await request.json();
      console.log(response);
      if(!response.success){
        toast.error(response.message)
      };
      if(response.success){
        toast.success(response.data)
      };
    } catch (error) {
      
      console.log(error.message);
    }
  }


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
              <Form onSubmit={handleSubmit(handleForgotPassword)}>
                <Form.Group
                  className="mb-3 position-relative"
                  controlId="formGroupEmail"

                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="bg-light shift1"
                    {...register("email",{ required: true })}
                  />
                  <p className="text-danger">
               {errors.email?.message}
                </p>
                  <div className="position-absolute top-0 mt-3 start-0 translate-middle-y p-2 text-primary ">
                    <IoMailOutline className="my-5 " />
                  </div>
                </Form.Group>
              <button className="btn btn-primary w-100 rounded-5" disabled={isSubmitting}>
                Recover Password
              </button>
              </Form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForgotPassword;
