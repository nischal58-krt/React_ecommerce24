import React, { useState, useEffect } from "react";

import FeatureProduct from "../../pages/FeatureProduct";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import chair1 from "/assests/chair-1.png";
import chair2 from "/assests/chair-2.png";
import chair3 from "/assests/chair-3.png";
import chair4 from "/assests/chair-4.png";

function HomeProduct() {
  // let products = [
  //   {
  //     name:"Cantiever Chair1",
  //     code:"Code-Y534201",
  //     price:"$43",
  //     image:chair1,
  //     // imageUrl:"/assests/chair-1.png"
  //   },

  //   {
  //     image:chair2,
  //     name:"Cantiever Chair2",
  //     code:"Code-Y53204201",
  //     price:"$45",
  //     // imageUrl:"/assests/chair-2.png"

  //   },
  //   {
  //     image:chair3,
  //     name:"Cantiever Chair3",
  //     code:"Code-Y534201",
  //     price:"$98",
  //     // imageUrl:"/assests/chair-3.png"

  //   },
  //   {
  //     image:chair4,
  //     name:"Cantiever Chair4",
  //     code:"Code-Y534201",
  //     price:"$75",
  //   //  imageUrl:"/assests/chir-4.png"
  //   },

  // ]

  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    let url = "https://ecommerce-sagartmg2.vercel.app/api/products/trending";
    axios.get(url).then((res) => {
      console.log(res);
      setProducts(res.data.data || []);
      setIsloading[false]
    });
  }, []);

  return (
    <>
      <div className="container grid gap-4 py-[116px]  sm:py-[130px] md:grid-cols-2 md:py-[148px] lg:grid-cols-4 lg:py-[148px] xl:py-[188px] xxl:py-[210px] ">
        {products.map((el) => {
          return (
            <FeatureProduct
              key={el._id}
              _id = {el._id}
              name={el.name}
              price={el.price}
              image={el.image}
            />
          );
        })}
      {isloading && (
          <>
            <Skeleton className="h-[250px]" />
            <Skeleton className="h-[250px]" />
            <Skeleton className="h-[250px]" />
            <Skeleton className="h-[250px]" />
          </>
        )}
        {!isloading && products.length == 0 && (
          <>
            <p>no products found</p>
          </>
        )}

      </div>
    </>
  );
}

export default HomeProduct;
