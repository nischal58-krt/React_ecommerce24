import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";

import { Link, useNavigate } from "react-router-dom";

function FeatureProduct(props) {
  const navigate = useNavigate();
  // const dispatch = useDispatch()
  console.log(props._id);
  return (
    <div
      onClick={() => {
        navigate(`/products/${props._id}`);
      }}
      className=" group bg-primary-light pt-[32px] shadow-[0px_0px_25px_0px_rgba(0,0,0,0.5)] hover:cursor-pointer "
    >
      <div
        className="absolute left-[11px] top-[11px]  h-[30px] w-[30px] items-center justify-center rounded-full
       border border-primary transition-all group-hover:flex"
      >
        <FaCartPlus className="text-primary hover:" />
      </div>

      <img
        src={props.image}
        className="h-15 mx-auto mb-[10px] mt-[32px] h-[150px] w-full object-cover"
      />

      <div className="bg-white p-[15px] text-center transition-all group-hover:bg-primary group-hover:font-bold  group-hover:text-white">
        <p className="group-hover:text-secondary">{props.name}</p>
        <p className="group-hover:font-josefin  group-hover:text-[#151875]">
          {" "}
          Code Y5-3401
        </p>
        <p className="group-hover:font-josefin  group-hover:text-[#151875]">
          ${props.price}
        </p>
      </div>
    </div>
  );
}

export default FeatureProduct;
