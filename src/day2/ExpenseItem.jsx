import React from 'react'
import Card from './Card'
import DateContainer from './DateContainer'

const ExpenseItem = () => {
  return (
    <Card className='bg-gray-700 h-auto w-full p-3 flex flex-row justify-between items-center mb-3'>
      <div className='flex flex-row items-center'>
        <DateContainer />
        <span className='ml-3 text-[24px] text-white font-bold capitalize'>Toilet Paper</span>
      </div>

      <Card className='bg-purple-800 text-center px-5 py-2 border-white border-2 text-white font-bold text-[17px]'>
        $22.22
      </Card>
    </Card>
  )
}

export default ExpenseItem
