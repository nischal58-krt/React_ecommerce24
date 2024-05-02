import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slice/cartSlice'

function Cart() {
    const cartItems = useSelector((store) => store.cart.value)
    const dispatch = useDispatch()
  return (
    <>
    <div>Cart Items</div>
    {JSON.stringify(cartItems)
    }   

    </>
  )
}

export default Cart
