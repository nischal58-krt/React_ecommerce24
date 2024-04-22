import React from "react";
import Header from "../components/home/Header";
import Banner from "../components/home/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductPart from "../components/ProductPart";

function Home() {
  const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
      <Header/>
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
       <ProductPart/>
   
    
     {/* <div id="box" className="bg-slate-500 sm:bg-purple-400 h-20 w-20 border  border-black mt-10" >
      </div> */}
      
      {/* <p>CSS Positions</p>
       <div className="box static">Static</div>
      <div className="box relative inline-block left-3 bg-red-400">Relative</div>
      <div className="box absolute bg-gray-800 bottom-3">Absolute</div>
      <div className="box fixed  bg-amber-500 top-0 right-10">fix</div> */}

      {/* <p className="font-josefin">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni fugiat,
        officia, consequatur numquam repellendus fugit corrupti dolores,
        obcaecati recusandae maiores rerum maxime eligendi accusantium esse
        voluptatibus! Nesciunt dolorem unde odit.
      </p>

      <p className="font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        amet voluptate, hic corporis nesciunt suscipit incidunt at modi aliquam
        illo.
      </p> */}
     
    </>
  );
}

export default Home;
