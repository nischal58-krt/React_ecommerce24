import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slice/cartSlice'
import { resetCart } from '../redux/slice/cartSlice'
function Cart() {
    const cartItems = useSelector((store) => store.cart.value)
    const dispatch = useDispatch()
  return (
    <>
    <div className='container'>Cart Items
    {JSON.stringify(cartItems)}
    <br />
        <br />
        <button
          className="btn"
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          clear all items
        </button>
        </div>
        {/* <li>{dispatch(addItem())}</li> */}
    </>
  )
}

export default Cart
