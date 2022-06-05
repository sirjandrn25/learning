import React from 'react'
import Button from '../UI/Button'
import { useFoodContext } from '../context/foodContext'
import { useUIContext } from '../context/uiContext'
import { useUserAuthContext } from '../context/userContext'

const cartCountReduce = (prevVal, currVal) => prevVal + currVal.qty

const Navbar = () => {
  const { carts } = useFoodContext()
  const { openModal, openModalHandler, closeModalHandler } = useUIContext()
  const { isLogin, handleLogout } = useUserAuthContext()

  return (
    <nav className='w-full flex flex-row p-5 fixed top-0 z-10 bg-[#990033] justify-around items-center'>
      <div className='text-white font-bold text-2xl'>FoodMandu</div>

      <div>
        <Button onClick={(e) => openModalHandler('cart')} className='bg-black/50 hover:bg-black mx-5'>
          <span>Your Cart</span>
          <span className='bg-[#33000f] rounded-full ml-3 py-1 px-3'>{carts.reduce(cartCountReduce, 0)}</span>
        </Button>
        {!isLogin && (
          <Button onClick={(e) => openModalHandler('login')} className='bg-cyan-400 hover:bg-cyan-600 w-[120px]'>
            Login
          </Button>
        )}
        {isLogin && (
          <Button onClick={(e) => handleLogout()} className='bg-yellow-400 hover:bg-yellow-700 w-[120px]'>
            Logout
          </Button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
