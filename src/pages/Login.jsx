import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerImg from "/assests/footer-img.png";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import FormErrorMessage from "../components/home/common/FormErrorMessage";
import { setReduxUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function Login() {
  const dispatch = useDispatch(); //we can only call redux function via this  

  const [seePassword, setseePassword] = useState(false)
  const [formError, setformError] = useState({ })
  const [formData, setformData] = useState({
    email:"b@b.com",
    password:"password",
  })
  
  const [isloading, setisloading] = useState(false);
  function handleSubmit(e) {
    setisloading(true);
    setformError({})
    e.preventDefault();
    //  console.log(e.target)
    //  console.log(e.target.name.value)
    //  console.log(e.target.password.value)
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
        email:formData.email,
        password:formData.password,
        // name: e.target.name.value,
        // email: e.target.email.value,
        // password: e.target.password.value,
        // role: e.target.role.value,
      })
      .then((res) => {
        toast.success("Sucess");
        setisloading(false);
        // navigate('/login')
        console.log("success")
        dispatch(setReduxUser(res.data.user)) // change redux value
      })
      .catch((err) => {
      if(err.response?.status === 400){
        console.log(err.response.data.errors);
        toast.error("bad error");

        let errObj = {
          // name:"custom error",
          // email:"error"
        } 
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
        {/* <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth: "300px",
        border: "1px solid black",
        margin: "auto",
      }}
    >
    </div> */}

        <div className="bg-[#F6F5FF]">
        <div className="mx-auto max-w-[210px] py-10">
          <p className="text-[20px] font-bold md:text-[36px]">My Account</p>
          <div className="flex flex-wrap gap-2 text-xs md:text-base">
            <a href="" className=" hover:text-secondary">
              Home
            </a>
            <a href="" className=" hover:text-secondary">
              Pages
            </a>
            <a href="" className=" hover:text-secondary">
              My Account
            </a>
          </div>
        </div>
      </div>

      <form className="" onSubmit={handleSubmit} >
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="flex w-[240px] flex-col justify-center gap-2 md:w-[433px]">
          <p className="text-center text-xl font-bold md:text-[32px]">Login</p>
          <p className="text-xs text-[#9096B2]">
            Please login using account detail bellow.
          </p>
          <input
            type="text"
            className="border p-2"
            value={formData.email}
            placeholder="Email Address"
          />
              <span><FormErrorMessage msg={formError.email}/></span> 

          <input type={
            seePassword
            } className="border p-2" placeholder="Password" value={formData.password} />
               <span><FormErrorMessage msg={formError.password}/></span>
             <FaRegEye />
          <p className="text-xs text-[#9096B2]">Forgot your password?</p>
          {/* <button className="w-full bg-secondary py-2 text-sm text-white">
            Login
          </button> */}
           <button disabled={isloading} className="btn w-full" type="submit">
              {isloading ? "loading" : "login"}
              </button>
          <Link className="text-xs text-[#558cf3]" to="signup">
            Don't have an Account?Create account?Sign Up 
          </Link>
        </div>
      </div>
      </form>
            <img src={footerImg} className="container my-[40px]" />
            <ToastContainer theme="colored" />
    </>
  );
}

export default Login;
