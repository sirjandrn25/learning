import React from 'react'

import { Outlet } from 'react-router-dom'

const QuizLayoutContainer = () => {
  return (
    <div className='h-screen w-screen bg-gray-400 relative flex flex-col justify-center items-center bg-gray-6'>
      <Outlet />
    </div>
  )
}

export default QuizLayoutContainer
