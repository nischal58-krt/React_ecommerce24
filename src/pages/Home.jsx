import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Home() {
  return (
    <>
    <header>
     <nav className='bg-[#7E33E0] text-white flex justify-between p-4'>
      <div className='mx-2.5'>
        
        <CiMail className='inline-block text-white' /> client@gmail.com
        <FaPhoneVolume className='inline-block space-x-0.5 text-white mx-3.5' />(12345)67890
        </div>

        <div className='ml-2.5'>
        <select className='bg-[#7E33E0] ml-3' >
        <option  value="english">English</option>
        <option  value="deutsch">De</option>
        </select>
        <select className='bg-[#7E33E0] ml-3'>
        <option  value="usd">USD</option>
        </select>
        <IoPerson className='inline-block ml-4.5' /> Login
        Wishlist<MdOutlineFavoriteBorder  className='inline-block ml-2'/> 
        <FaCartShopping  className='inline-block mx-2.5'/> Cart
          </div>
    </nav>
    <div className='flex justify-between p-4 '>
    <h1 className='text-3xl font-bold'>Hekto</h1>
     <CiSearch /> 
    </div>

      <p className='font-josefin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni fugiat, officia, consequatur numquam repellendus fugit corrupti dolores, obcaecati recusandae maiores rerum maxime eligendi accusantium esse voluptatibus! Nesciunt dolorem unde odit.
      </p>
    </header>
    </>
   
  )
}

export default Home