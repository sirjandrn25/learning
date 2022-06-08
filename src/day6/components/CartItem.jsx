import React from 'react'
import Item from '../UI/Item'
import { useFoodContext } from '../context/foodContext'

const CartItem = (props) => {
  const { decrementQty, incrementQty } = useFoodContext()

  return (
    <>
      <Item className='border-b-[#660000]'>
        <div className='flex flex-col'>
          <span className='font-bold text-lg capitalize'>{props.cart.meal.title}</span>
          <div className='flex flex-row justify-center items-center mt-1'>
            <span className='mr-5 font-bold text-[#990000]'>
              ${(props.cart.qty * props.cart.meal.price).toFixed(4)}
            </span>
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
      </Item>
    </>
  )
}

export default CartItem
