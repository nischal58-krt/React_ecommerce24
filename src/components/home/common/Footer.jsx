import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#EEEFFB] ">
          <div className="container w-full items-center py-[31px] sm:container sm:flex sm:justify-between">
            <h1 className="leading-auto inline-block font-josefin text-[34px] font-semibold ">
              Hekto{" "}
            </h1>
            <ul>
              <input type="text " placeholder="Enter your E-mail address" />
              <button className=" bg-secondary px-3 text-white">
                {" "}
                Sign Up{" "}
              </button>
              <p className="text-[#8A8FB9]">Contact Info</p>
              <li className="text-[#8A8FB9]">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </li>
            </ul>

            <div className=" sm:gap-4">
              <h1 className="leading-auto inline-block font-josefin text-[34px] font-bold">
                Categories
              </h1>
              <ul className="text-[#8A8FB9]">
                <li>Laptop & Computers</li>
                <li> Camera & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Laptop & Computers</li>
                <li>Video Games Consoles</li>
              </ul>
            </div>
            <div className="sm:gap-4">
              <h2 className="leading-auto inline-block font-josefin text-[34px] font-bold">
                Customer Care{" "}
              </h2>
              <ul className="text-[#8A8FB9]">
                <li>My Account</li>
                <li> Discount</li>
                <li>Returns</li>
                <li>Order History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#E7E4F8] ">
        <nav className="text-center flex gap-3 text-2xl text-[#8A8FB9] ">
          <FaRegCopyright  className=""/>All Rights reserved
          <CiFacebook className="" />
          <FaInstagram />
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
