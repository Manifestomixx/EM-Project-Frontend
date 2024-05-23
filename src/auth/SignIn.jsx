import React,{useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import EMLogo from "../assets/em-logo.png";
import Image from "../assets/log.png";
import "../style/SignIn.css";
import { IoMailOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { data } from "../../Db";
import { signInSchema } from "../utility/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const SignIn = () => {
  const [isClicked,setIsClicked] = useState(false);
  const [isReveal, setIsReveal] = useState(false);
  const navigate = useNavigate()

  function handleToggle (){
    !isReveal ? setIsReveal(true) : setIsReveal(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting},
  } = useForm({resolver:yupResolver(signInSchema),
    defaultValues:{
      email:"",
      password:"",
      
    }
  });


  const handleSignIn = async (data)=>{
    console.log(data);
    setIsClicked(true)

    try {
      const request = await fetch("https://em-project-backend-tur2.onrender.com/api/v1/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const response = await request.json();
      console.log(response);

      if(!response.success){
        toast.error(response.message)
      }
      if(response.success){
        toast.success(response.message)
        localStorage.setItem("clientToken",response.user.token)
        navigate("/Hero")
      }

    } catch (error) {
      
    }finally{
      setIsClicked(false)
    }
  }
  

  console.log(errors);

  const btnText = isClicked ? "Loading..." : "Sign In";

  useEffect(() => {
    document.title = "SignIn | Page";
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
              <h1>Welcome back to EM</h1>
              <h6>Sign in to your account</h6>
            </div>
            <Form onSubmit={handleSubmit(handleSignIn)}>

              {/* Email */}
              <Form.Group
                className="mb-3 position-relative"
                controlId="formGroupEmail"
              >
                <div className="position-relative">

                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="bg-light shift1"
                  {...register("email",{ required: true })}

                />
                <p className="text-danger">
               {errors.email?.message}
                </p>

                <div className="position-absolute top-0 start-0 translate-middle- p-2 text-primary ">
                  <IoMailOutline className="mb-1  " />
                </div>
                
                </div>
              </Form.Group>

              {/* Password */}
              <Form.Group
                className="mb-3 position-relative"
                controlId="formGroupPassword"
              >
                <div className="position-relative">

                <Form.Control
                  type={isReveal ? "text" : "password"}
                  placeholder="Password"
                  className="bg-light shift1"
                  {...register("password",{ required: true })}
                />
                <p className="text-danger">
               {errors.password?.message}
                </p>
                
                <div className="position-absolute top-0 start-0 translate-middle- p-2 text-primary ">
                  <MdLockOutline className="mb-1  " />
                </div>

                </div>

                <p className="text-secondary text-center position-absolute end-0 top-0 mt-3 translate-middle" role="button" onClick={handleToggle}>{isReveal ? <FaRegEyeSlash /> : <FaRegEye />} </p>
                
              </Form.Group>

              
            <div className="d-flex justify-content-between ">
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={type}
                    id={`default-${type}`}
                    label={"keep me signed in"}
                    className="fs-6"
                  />
                </div>
              ))}
              <p><Link to={"../ForgotPassword"} className="text-decoration-none">
              Forgot password 
              </Link> </p>
              
            </div>
            
            {/* <Link to="/Hero" className="btn btn-primary w-100 rounded-5">
            Sign
            </Link> */}

            {/* Botton */}
            <button className="btn btn-primary w-100 rounded-5" disabled={isSubmitting}>{btnText}</button>
            </Form>


            {/* dont have an account */}
            <p className="text-center mt-3">
              Dont have an account?{" "}
              <Link to="/SignUp" className="text-decoration-none">
                <span className="text-primary">Create one </span>
              </Link>{" "}
            </p>
            <p className="text-secondary ptag text-center">
              By signing in you accept our Privacy Policy, Terms & Licensing
              Agreement. Protected by reCAPTCHA. Google Privacy
              Policy & Terms apply.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
