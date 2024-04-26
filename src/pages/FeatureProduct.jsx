import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";



function FeatureProduct(props) {
  return (
    <div className=" group bg-primary-light pt-[32px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.5)] ">

      <div className=" absolute left-[11px] top-[11px] hidden h-[30px] w-[30px] items-center justify-center rounded-full
       border border-primary transition-all group-hover:flex">
        <FaCartPlus className="text-primary" />
      </div>

      <img src={props.image} className="h-[150px] w-full object-cover mx-auto mb-[10px] mt-[32px] h-15" />

      <div className="bg-white p-[15px] text-center transition-all group-hover:bg-primary group-hover:font-bold  group-hover:text-white">
        <p className="group-hover:text-secondary">{props.name}</p>
        <p className="group-hover:font-josefin  group-hover:text-[#151875]">
          {" "}
          Code Y5-3401
        </p>
        <p className="group-hover:font-josefin  group-hover:text-[#151875]">
          ${ props.price}
        </p>
      </div>
    </div>
  );
}

export default FeatureProduct;
