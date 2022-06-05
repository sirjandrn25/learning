import React from 'react'
import Navbar from './components/Navbar'
import FoodContainer from './components/FoodContainer'

import CartContainer from './components/CartContainer'
import LoginContainer from './components/LoginContainer'

const FoodOrderContainer = () => {
  return (
    <>
      <div className='min-h-screen w-screen flex items-center justify-center bg-gray-100'>
        <header>
          <Navbar />
        </header>

        <main className='h-auto pt-8 w-screen flex flex-col justify-center items-center z-0 static top-0 '>
          <FoodContainer />
        </main>
      </div>
      <CartContainer />
      <LoginContainer />
    </>
  )
}

export default FoodOrderContainer
