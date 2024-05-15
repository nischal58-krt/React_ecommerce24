import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function SellerProduct() {
  const [products, setproducts] = useState(null)
  let token = localStorage.getItem("token")
  useEffect(()=>{
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/products",{
      headers:{
        Authorization:`Bearer${token}`
      }
    })
    .then((res)=>{
      setproducts(res.data)
    })
  },[])
  return (
    <>
    <div>  Here you can find all Seller Products</div>
    {JSON.stringify(products)}
    </>
  )
}

