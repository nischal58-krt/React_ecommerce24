import React from 'react'
import  sofa1 from "/assests/sofa1.png"


export default function LatestProducts() {
    let latest = [
        {
            title:"Comfort Handy Craft",
            price:"$123",
        }
    ]
  return (
    <>
    <div className='container '>
    {/* <div className='container grid gap-4 py-[116px]  sm:py-[130px] md:grid-cols-2 md:py-[148px] lg:grid-cols-4 lg:py-[148px] xl:py-[188px] xxl:py-[210px] '> */}
   <h1 className="font-josefin font-bold text-[#151875]">Latest Products </h1>
    <div className=" flex justify-center gap-3">
        <p>New Arrival</p>
        <p>Best Seller</p>
        <p>Featured</p>
        <p>Special Offer</p>
    </div>
    <img src= {sofa1}/>
    {
        latest.map((el)=>{
                return (
                 el.img
                )
            
        })
    }
    </div>

    </>
  )
}

