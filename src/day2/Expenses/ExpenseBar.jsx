import React from 'react'

const ExpenseBar = () => {
  return (
    <div>
      <div className='bg-blue-100 rounded-lg w-3 h-[100px] relative'>
        <div
          className={`transition-all delay-300 ease-linear h-1/2 w-full bg-blue-700 rounded-lg absolute bottom-0 `}></div>
      </div>
      <span className='font-bold text-[10px]'>jun</span>
    </div>
  )
}

export default ExpenseBar
