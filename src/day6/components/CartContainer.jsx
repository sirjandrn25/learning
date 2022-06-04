import React from 'react'
import Modal from './Modal'
import CartItem from './CartItem'
import { useFoodContext } from '../context/foodContext'

const CartContainer = () => {
  const { carts } = useFoodContext()
  return (
    <ul className='flex flex-col w-[600px]'>
      {carts.map((cart) => {
        return <CartItem cart={cart} key={cart.id} />
      })}
    </ul>
  )
}

export default CartContainer
