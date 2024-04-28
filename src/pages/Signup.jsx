import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerImg from "/assests/footer-img.png";
// import BreadCrumb from "../components/common/BreadCrumb";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormErrorMessage from "../components/home/common/FormErrorMessage";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [formError, setformError] = useState({
    // name:"required",
    // email:"required",
  })
  const navigate = useNavigate()
  const [isloading, setisloading] = useState(false);
  function handleSubmit(e) {
    setisloading(true);
    setformError({})
    e.preventDefault();
    //  console.log(e.target)
    //  console.log(e.target.name.value)
    //  console.log(e.target.password.value)
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: e.target.role.value,
      })
      .then((res) => {
        toast.success("Sucess");
        setisloading(false);
        navigate('/login')
      })
      .catch((err) => {
      if(err.response?.status === 400){
        console.log(err.response.data.errors);
        toast.error("bad error");

        let errObj = {} 
        err.response.data.errors.forEach((element)=>{
            errObj[element.param] = element.msg;
        });
        setformError(errObj)
      }else{
        toast.error("sorry something went wrong.Please try again later")
      }
      setisloading(false);
      });
  }

  return (
    <>
      {/* <BreadCrumb /> */}
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="font-lato space-y-2 p-[24px]  ">
          <div>
            <h1 className="font-Josefin mb-0 text-center text-[32px] font-bold">
              Signup
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please Signup filling following details bellow.
            </p>
          </div>

          <form className="" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
              />
             <FormErrorMessage msg={formError.name}/>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email Address"
              />
               <FormErrorMessage msg={formError.email}/>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
               <FormErrorMessage msg={formError.password}/>
            </div>
            <div className="form-group">
              <select placeholder="Role" className="form-control" name="role">
                <option value="">Select Role</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
            </div>
            <FormErrorMessage msg={formError.role}/>
            <a href="/forgetPassword" className="text-sm text-[#9096B2]">
              Forget Your Password ?
            </a>
            <button disabled={isloading} className="btn w-full" type="submit">
              {isloading ? "loading" : "signup"}
            </button>
            <p className="text-gray-light">
              Don’t have an Account?
              <a href="/Signup" className="text-[#558cf3]">
                Create account
              </a>
            </p>
          </form>
        </div>
      </div>
      <img src={footerImg} className="container my-[40px]" />
      <ToastContainer theme="colored" />
    </>
  );
}
``;
