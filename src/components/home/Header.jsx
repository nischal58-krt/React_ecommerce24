import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(){
    console.log("button clicked")
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <header>
        <div className="bg-primary">
          <nav className="p-4 text-center font-josefin text-white sm:container sm:flex sm:justify-between">
            <div className="sm:flex sm:gap-4">
              <p>
                <CiMail className="inline-block gap-4 text-white" />{" "}
                client@gmail.com
              </p>
              <a>
                <FaPhoneVolume className="inline-block  text-white" />
                (12345)67890
              </a>
              <p className="flex justify-center">
                English
                <MdKeyboardArrowDown />
              </p>
              <p className="flex justify-center">
                {" "}
                USD
                <MdKeyboardArrowDown />{" "}
              </p>
            </div>
            <div>
              <span>
                <IoPerson className="inline-block" /> Login
              </span>
              <span>
                Wishlist <MdOutlineFavoriteBorder className="inline-block" />{" "}
              </span>
              <span>
                <FaCartShopping className="inline-block" /> Cart
              </span>
            </div>
          </nav>
        </div>

        <nav className="container justify-between  pb-[12px]  pt-[18px] sm:flex">
          <div className="flex w-full lg:w-auto items-center  justify-between lg:gap-20">
            <a
              id="logo"
              href=""
              className=" leading-auto inline-block font-josefin text-[34px] font-semibold text-primary-dark hover:text-secondary"
            >
              Hekto
            </a>

            <div className=" hidden md:flex md:gap-4 ">
              <a className="text-secondary">Home</a>
              <a className="hover:text-secondary" href="">
                Pages
              </a>
              <a className="hover:text-secondary" href="">
                Products
              </a>
              <a className="hover:text-secondary" href="">
                Blog
              </a>
              <a className="hover:text-secondary" href="">
                Shop
              </a>
              <a className="hover:text-secondary" href="">
                Contact
              </a>
            </div>
            
              {isMenuOpen && (
            <>
              <ul>
                <li>home</li>
                <li>static</li>
              </ul>
              <button onClick={toggleMenu}>close</button>
            </>
          )}
            
            <CiMenuBurger onClick={toggleMenu} className="flex text-3xl md:hidden " />
          </div>

          <form className=" hidden lg:flex">
            <input
              className=" border-primary-light px-2
              py-1
             focus:border-secondary focus:outline-none focus:transition-all"
              type="text"
            />
            <button className=" bg-secondary px-3">
              <CiSearch className="text-white" />
            </button>
          </form>
        </nav>
      </header>
    </>
  );
}

export default Header;
