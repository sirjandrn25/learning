import React from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { useFoodContext } from '../context/foodContext'
import { useUIContext } from '../context/uiContext'
import Button from '../UI/Button'
import Item from '../UI/Item'
import { useUserAuthContext } from '../context/userContext'

const totalAmountReducer = (prevVal, currCart) => prevVal + currCart.meal.price * currCart.qty

const CartContainer = () => {
  const { openModal, closeModalHandler, openModalHandler } = useUIContext()
  const { carts } = useFoodContext()
  const { isLogin } = useUserAuthContext()

  let totalRender = (
    <Item className=''>
      <span className='font-bold text-xl'>Total Amount</span>
      <span className='font-bold text-xl'>${carts.reduce(totalAmountReducer, 0).toFixed(4)}</span>
    </Item>
  )

  const handleOrder = () => {
    if (isLogin) {
      console.log('successfully ordered')
    } else {
      openModalHandler('login')
    }
  }

  let renderCartItem = (
    <ul className='flex flex-col w-[600px]'>
      {carts.map((cart) => {
        return <CartItem cart={cart} key={cart.id} />
      })}
      {totalRender}
    </ul>
  )

  let renderOrder = (
    <Button onClick={handleOrder} className='bg-[#b30059] w-[120px]'>
      Order
    </Button>
  )
  return (
    <Modal open={openModal === 'cart' ? true : false} onClose={closeModalHandler}>
      {carts.length ? renderCartItem : ''}
      {carts.length === 0 && <h1 className='text-2xl'>No Carts Found</h1>}

      <div className='flex flex-row justify-end mt-3'>
        <Button onClick={closeModalHandler} className='w-[120px] bg-gray-600 mr-3 '>
          close
        </Button>
        {carts.length ? renderOrder : ''}
      </div>
    </Modal>
  )
}

export default CartContainer
