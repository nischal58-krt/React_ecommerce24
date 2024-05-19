import React from "react";
import sofa1 from "/assests/sofa1.png";

export default function LatestProducts() {
  let latest = [
    {
      title: "Comfort Handy Craft",
      price: "$123",
      img: "/assests/sofa1.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$123",
      img: "/assests/sofa2.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$123",
      img: "/assests/sofa3.png",
    },

    {
      title: "Comfort Handy Craft",
      price: "$123",
      img: "/assests/sofaC1.png",
    },

    {
      title: "Comfort Handy Craft",
      price: "$123",
      img: "/assests/sofa4.png",
    },
    {
      title: "Comfort Handy Craft",
      price: "$123",
      img: "/assests/sofa5.png",
    },
  ];

  return (
    <>
    <div className="container">
      <h1 className="text-center font-josefin font-extrabold text-[#151875]">
        Latest Products{" "}
      </h1>
      <div className=" flex justify-center gap-3 ">
        <p className="text-[#FB4997]">New Arrival</p>
        <p>Best Seller</p>
        <p>Featured</p>
        <p>Special Offer</p> 
      </div>

      <div className=" grid gap-3 py-8 sm:py-[130px] md:grid-cols-2 md:py-[148px] lg:grid-cols-3 lg:py-[148px] xl:py-[188px] xxl:py-[210px] ">
        {latest.map((el) => {
          return (
            <div>
              <img src={el.img} className=""></img>
              <p className="text-[#151875]">{el.title}</p>
              <p>{el.price}</p>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
