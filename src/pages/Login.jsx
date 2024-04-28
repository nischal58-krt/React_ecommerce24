import React, { useState } from "react";
import { Link } from "react-router-dom";
import footerImg from "/assests/footer-img.png";
import { FaRegEye } from "react-icons/fa";
function Login() {
  const [seePassword, setseePassword] = useState(false)
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

      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="flex w-[240px] flex-col justify-center gap-2 md:w-[433px]">
          <p className="text-center text-xl font-bold md:text-[32px]">Login</p>
          <p className="text-xs text-[#9096B2]">
            Please login using account detail bellow.
          </p>
          <input
            type="text"
            className="border p-2"
            placeholder="Email Address"
          />
          
          <FaRegEye />
          <input type={
            seePassword
            } className="border p-2" placeholder="Password" />
          <p className="text-xs text-[#9096B2]">Forgot your password?</p>
          <button className="w-full bg-secondary py-2 text-sm text-white">
            Login
          </button>
          <Link className="text-xs text-[#558cf3]" to="signup">
            Don't have an Account?Create account?Sign Up 
          </Link>
        </div>
      </div>
            <img src={footerImg} className="container my-[40px]" />
    </>
  );
}

export default Login;
