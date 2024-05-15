import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Products() {
  const [products, setproducts] = useState(null)

  useEffect(()=>{
    axios.get("https://ecommerce-sagartmg2.vercel.app/api/products",{
    })
    .then((res)=>{
      setproducts(res.data)
    })
  },[])
  return (
    <>
    <div>  Here you can find all the  Products</div>
    {JSON.stringify(products)}
    </>
  )
}

