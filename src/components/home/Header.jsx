import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    console.log("button clicked");
    setIsMenuOpen(!isMenuOpen);
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
              <p className="flex justify-center sm:flex">
                English
                <MdKeyboardArrowDown />
              </p>
              <p className="flex justify-center">
                {" "}
                USD
                <MdKeyboardArrowDown />{" "}
              </p>
            </div>
            <div className="gap-2 sm:flex">
              <span>
                <IoPerson className="inline-block" /> Login
              </span>
              <span>
                <MdOutlineFavoriteBorder className="inline-block" /> Wishlist{" "}
              </span>
              <span>
                <FaCartShopping className="inline-block" /> Cart
              </span>
            </div>
          </nav>
        </div>

        <nav className="container justify-between  pb-[12px]  pt-[18px] sm:flex">
          <div className="flex w-full items-center justify-between  lg:w-auto lg:gap-20">
            <a
              id="logo"
              href=""
              className=" leading-auto inline-block font-josefin text-[34px] font-semibold text-primary-dark hover:text-secondary"
            >
              Hekto
            </a>

            <div
              className={`${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} width-[50%] fixed bottom-0 right-0 top-0 flex 
               flex-col bg-fuchsia-300 p-12 transition-all md:static md:w-auto md:flex-row md:gap-4 md:bg-transparent md:p-0 z-20`}
            >
              <button onClick={toggleMenu}>
                <IoClose className=" flex justify-between text-3xl md:hidden " />{" "}
              </button>

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
            </div>

            {/* {isMenuOpen && (
              <>
                <ul>
                  <li>home</li>
                  <li>static</li> static code when clicked button to show side pop-up
                </ul>
                <button onClick={toggleMenu}>close</button>
              </>
            )} */}

            <CiMenuBurger
              onClick={toggleMenu}
              className="flex text-4xl md:hidden "
            />
            {isMenuOpen && (
              <div
                onClick={toggleMenu}
                className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-[rgba(231,100,205,0.5)]"
              ></div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
