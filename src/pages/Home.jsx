import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/home/common/Header";
import Banner from "../components/home/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "../components/home/HomeProduct"
import Signup from "./Signup";
import LatestProducts from "./LatestProducts";
import Footer from "../components/home/common/Footer";

function Home() {
  const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false
  };
  let banners = [
    {
      background: "bg-banner-1",
      label: "Best Furniture For Your Castle....",
      heading: " New Furniture Collection Trends in 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/blogs",
    },
    {
      background: "bg-banner-2",
      label: "Second Furniture For Your Castle....",
      heading: " Second Furniture Collection Trends in 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/offers",
    },
    {
      background: "bg-banner-3",
      label: "Third Furniture For Your Castle....",
      heading: " Third Furniture Collection Trends in 2024",
      description:
        "Third ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/products",
    },
  ];
  
  return (
    <>
    
      {/* <Header/> */}
       <Slider {...settings}>
        {
          banners.map((el)=>{
            return <Banner
            background = {el.background}
            label = {el.label}
            heading = {el.heading}
            description = {el.description}
            redirectUrl = {el.redirectUrl}
            />
          })
        }
       {/* <Banner background={"bg-banner-1"}/>
       <Banner background={"bg-banner-2"}/>
       <Banner background={"bg-banner-3"}/> */}
       </Slider>
       <Product/>
       {/* <Footer/> */}
       <LatestProducts/>
        {/* <Signup/> */}
    </>
  );
}

export default Home;
