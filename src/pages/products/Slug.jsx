import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import bag23 from '/assests/bag-23.png'
import 

{ MdFavoriteBorder } from "react-icons/md";

function Slug() {

  const [product, setProduct] = useState({})

  const params = useParams

useEffect(()=>{
  axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
},[])

  return (
    <>
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
              Product Details
            </a>
          </div>
        </div>
      </div>
      <div className='bg-[#FFFFFF] container py-[32px]'>
        <img className='ansolute' src={bag23}/>
        <h1>Playword Arm Chair</h1>
        <ul>
          <li>$320</li>
          <li>Color</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusantium a ipsa nam tempora officia voluptas ipsum obcaecati libero soluta ex, eaque, architecto suscipit doloribus, temporibus voluptatibus. Aliquam, ea aperiam.</li>
          <li className='text-[#151875]'>Addd to Cart</li>
          <MdFavoriteBorder />
        </ul>

      </div>
    </>
  )
}

export default Slug