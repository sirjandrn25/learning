import React from 'react'
// import Card from './Card'
import Card from '../UI/Card'
import ExpenseBar from './ExpenseBar'

const ExpenseFigure = () => {
  return (
    <Card className='bg-red-100 mb-3 py-2 justify-items-center w-full grid grid-cols-12 gap-2 '>
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
      <ExpenseBar />
    </Card>
  )
}

export default ExpenseFigure
