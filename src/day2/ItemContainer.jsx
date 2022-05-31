import React from 'react'
import ExpenseItem from './ExpenseItem'

const ItemContainer = () => {
  return (
    <div className='h-auto w-full'>
      <ExpenseItem />
      <ExpenseItem />
    </div>
  )
}

export default ItemContainer
