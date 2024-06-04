import React, {useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import EMLogo from "../assets/em-logo.png";
import Image from "../assets/log.png";
import '../style/SignUp.css'
import { IoMailOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../utility/ValidationSchema";
import toast from "react-hot-toast";
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    
  const [isReveal, setIsReveal] = useState(false);
  const [serverError,setServerError] = useState("");
  const [successMsg,setSuccessMsg] = useState("");
  const [isClicked,setIsClicked] = useState(false);
  const navigate = useNavigate();
  const {resetToken} = useParams();


  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting},
  } = useForm({resolver:yupResolver(resetPasswordSchema),
    defaultValues:{
      
      password:"",
      confirmPassword:"",
    }
  
  });

  console.log(errors);

  const onSubmit = async(data) => {
    console.log(data)
    setIsClicked(true)
    try {
      setSuccessMsg("");
      setServerError("")
      const req = await fetch(`http://localhost:5320/api/v1/auth/resetpassword/${resetToken}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const res = await req.json();
      console.log(res);
      if(!res.success){
        const errorData = await res;
        setServerError(errorData.message)
        setIsClicked(true)
      }
      if(res.success){
        setSuccessMsg(res.message)
        toast.success(res.message)
        navigate('/')
      }
    } catch (error) {
      console.log(error.message);
      
    }finally{
      setIsClicked(false)
    }
  };
  const btnText = isClicked ? "Loading..." : "Reset Password";

  function handleToggle (){
    !isReveal ? setIsReveal(true) : setIsReveal(false)
  }
  useEffect(() => {
    document.title = "ResetPassword | Page";
  });


  return (
    <>
    <main className="container">
        <section className="d-flex justify-content-center row my-5 ">
            {/* section for hero */} 
          <div className="bg-light px-5 text-center py-5 d-none d-md-block col-md-6">
            <img src={Image} className="img-fluid w-100" alt="signup-image" />
          </div>

          {/* section for form */}
          <div className="bg-white m-auto p-5 col-md-6">
            <div className="text-center">
            <img src={EMLogo} alt="" className="" />
            <h1>Welcome to EM</h1>
            <h6>Reset Password</h6>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              

              {/* for password */}
              <Form.Group className="mb-3 position-relative" controlId="formGroupPassword">
                {/* <Form.Label>Password</Form.Label> */}

                <div className="position-relative">
                <Form.Control type={isReveal ? "text" : "password"} 
                placeholder="Password" className="bg-light shift "
                {...register("password", { required: true })}></Form.Control>
                 <p className="text-danger">
               {errors.password?.message}
                </p>
                <div className="position-absolute top-0 start-0 translate-middle- p-2 text-primary ">
                <MdLockOutline className="mb-2"/>
                </div>
                </div>
              

                <p className="text-secondary position-absolute end-0 top-0 mt-3 translate-middle" role="button" onClick={handleToggle}>{isReveal ? <FaRegEyeSlash /> : <FaRegEye />} </p>
                
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3 position-relative" controlId="formGroupPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <div className="position-relative">

                <Form.Control type={isReveal ? "text" : "password"}
                placeholder="Confirm Password" className="bg-light shift "
                {...register("confirmPassword", { required: true })}></Form.Control>
                 <p className="text-danger">
               {errors.confirmPassword?.message}
                </p>

                <div className="position-absolute top-0 start-0 translate-middle- p-2 text-primary ">
                <MdLockOutline className="mb-3"/>
                </div>
                </div>
              
                <p className="text-secondary position-absolute end-0 top-0 mt-3 translate-middle" role="button" onClick={handleToggle}>{isReveal ? <FaRegEyeSlash /> : <FaRegEye />} </p>

                
              </Form.Group>

              {serverError && <p className="text-danger text-center">{serverError}</p> }
              {successMsg && <p className="text-success text-center">{successMsg}</p> }


            <button className="btn btn-primary w-100 rounded-5" disabled={isSubmitting}>{btnText}</button>
            {/* <Link to={'../Registration'}>
            </Link> */}
            {/* <p className="text-center mt-">Have an account?  <Link to="/" className="text-decoration-none"><span className="text-primary">Sign In</span></Link> </p> */}
            </Form>
            <p className="text-secondary ptag1 mt-3 text-center">By signing up you accept our Privacy Policy, Terms & Licensing Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms apply.</p>

          </div>
        </section>
      </main>
    </>
  )
}

export default ResetPassword