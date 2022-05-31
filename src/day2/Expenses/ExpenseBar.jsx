import React from 'react'

const ExpenseBar = (props) => {
  return (
    <div>
      <span className='font-bold text-[10px]'>${props.total_amount}</span>
      <div className='bg-blue-100 rounded-lg w-3 h-[100px] relative'>
        <div
          className={`transition-all delay-300 ease-linear w-full bg-blue-700 rounded-lg absolute bottom-0 `}
          style={{ height: `${(props.total_times / 12) * 100}%` }}></div>
      </div>
      <span className='font-bold text-[10px]'>{props.month}</span>
    </div>
  )
}

export default ExpenseBar
