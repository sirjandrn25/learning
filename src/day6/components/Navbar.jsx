import React from 'react'
import Button from '../UI/Button'
import { useFoodContext } from '../context/foodContext'
import { useUIContext } from '../context/uiContext'

const cartCountReduce = (prevVal, currVal) => prevVal + currVal.qty

const Navbar = (props) => {
  const { carts } = useFoodContext()
  // const { toggleCartOpen } = useUIContext()
  const { isCartOpen, toggleCartOpen } = useUIContext()

  return (
    <nav className='w-full flex flex-row p-5 fixed top-0 z-10 bg-[#990033] justify-around items-center'>
      <div className='text-white font-bold text-2xl'>FoodMandu</div>

      <div>
        <Button onClick={toggleCartOpen} className='bg-black/50 hover:bg-black mx-5'>
          <span>Your Cart</span>
          <span className='bg-[#33000f] rounded-full ml-3 py-1 px-3'>{carts.reduce(cartCountReduce, 0)}</span>
        </Button>
        <Button className='bg-cyan-400 hover:bg-cyan-600 w-[120px]'>Login</Button>
      </div>
    </nav>
  )
}

export default Navbar
