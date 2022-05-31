import React from 'react'
import Card from '../UI/Card'

const DateContainer = (props) => {
  return (
    <Card className='border-2 border-white bg-slate-900 h-auto w-auto px-5 py-2 flex flex-col items-center'>
      <span className='text-center text-white font-medium text-[14px]'>
        {props.date.toLocaleString('default', { month: 'short' })}
      </span>

      <span className='text-center text-white font-normal text-[12px]'>{props.date.getFullYear()}</span>
      <span className='text-center text-white font-bold text-[16px]'>{props.date.getDate()}</span>
    </Card>
  )
}

export default DateContainer
