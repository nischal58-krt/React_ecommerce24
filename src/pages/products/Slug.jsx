import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Slug() {

  const [product, setProduct] = useState({})

  const params = useParams

useEffect(()=>{
  axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.slug}`)
},[])

  return (
    <div>Slug</div>
  )
}

export default Slug