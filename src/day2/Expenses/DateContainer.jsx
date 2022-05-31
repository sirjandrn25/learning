import React from 'react'
import Card from '../UI/Card'

const DateContainer = () => {
  return (
    <Card className='border-2 border-white bg-slate-900 h-auto w-auto px-5 py-2 flex flex-col items-center'>
      <span className='text-center text-white font-medium text-[14px]'>August</span>

      <span className='text-center text-white font-normal text-[12px]'>2022</span>
      <span className='text-center text-white font-bold text-[16px]'>14</span>
    </Card>
  )
}

export default DateContainer
