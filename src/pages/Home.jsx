import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Banner1 from "../assets/banner-1.png"


function Home() {
  return (
    <>
      <header>
        <div className="bg-primary">
          <nav className="font-josefin container text-white flex justify-between p-4">
            <div className="mx-2.5">
              <CiMail className="inline-block text-white" /> client@gmail.com
              <FaPhoneVolume className="inline-block space-x-0.5 text-white mx-3.5" />
              (12345)67890
            </div>

            <div className="ml-2.5">
              <select className="bg-[#7E33E0] ml-3">
                <option value="english">English</option>
                <option value="deutsch">De</option>
              </select>
              <select className="bg-[#7E33E0] ml-3">
                <option value="usd">USD</option>
              </select>
              <IoPerson className="inline-block ml-4.5" /> Login Wishlist
              <MdOutlineFavoriteBorder className="inline-block ml-2" />
              <FaCartShopping className="inline-block mx-2.5" /> Cart
            </div>
          </nav>
        </div>

        <nav className="container  flex justify-between  pt-[18px] pb-[12px]">
          <a
            id="logo"
            href=""
            className=" inline-block text-[34px] font-josefin font-semibold leading text-primary-dark hover:text-secondary"
          >
            Hekto
          </a>
          <div className="flex grow gap-4">
            <a className="text-secondary">Home</a>
            <a className="hover:text-secondary" href="">
              Pages
            </a>
            <a href="">Products</a>
            <a href="">Blog</a>
            <a href="">Shop</a>
            <a href="">Contact</a>
            </div>
            <form className="flex">
              <input
                className="focus:border-secondary px-2 py-1
              focus:transition-all
             focus:outline-none border border-primary-light"
                type="text"
              />
              <button className=" bg-secondary px-3">
                <CiSearch className="text-white" />
              </button>
            </form>
          
        </nav>
      </header>
      <img src={Banner1}/>
      <p className="font-josefin">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni fugiat,
        officia, consequatur numquam repellendus fugit corrupti dolores,
        obcaecati recusandae maiores rerum maxime eligendi accusantium esse
        voluptatibus! Nesciunt dolorem unde odit.
      </p>

      <p className="font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        amet voluptate, hic corporis nesciunt suscipit incidunt at modi aliquam
        illo.
      </p>
    </>
  );
}

export default Home;
