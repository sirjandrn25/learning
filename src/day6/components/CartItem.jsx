import React from 'react'
import Card from '../UI/Card'
import { useFoodContext } from '../context/foodContext'

const CartItem = (props) => {
  const { decrementQty, incrementQty } = useFoodContext()
  return (
    <>
      <li className='flex flex-row w-full justify-between items-center border-b-[1px] border-b-[#660000] p-2'>
        <div className='flex flex-col'>
          <span className='font-bold text-lg capitalize'>{props.cart.food.title}</span>
          <div className='flex flex-row justify-center items-center mt-1'>
            <span className='mr-5 font-bold text-[#990000]'>${props.cart.qty * props.cart.food.price}</span>
            <span className='border-2 px-2'>x {props.cart.qty}</span>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <span
            onClick={(e) => decrementQty(props.cart)}
            className='border-2 border-[#990000] px-2 font-bold text-lg cursor-pointer  text-[#990000] mr-2 '>
            -
          </span>
          <span
            onClick={(e) => incrementQty(props.cart)}
            className='border-2 border-[#990000] px-2 font-bold text-lg cursor-pointer text-[#990000]'>
            +
          </span>
        </div>
      </li>
    </>
  )
}

export default CartItem
