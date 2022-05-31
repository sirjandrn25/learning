import React from 'react'
// import Card from './Card'
import Card from '../UI/Card'
import ItemContainer from './ItemContainer'
import ExpenseFigure from './ExpenseFigure'
import FilterExpenses from './FilterExpenses'
import AddExpenses from './AddExpenses'

const ExpenseTrackerContainer = () => {
  return (
    <div className='bg-gray-500 min-h-screen w-screen flex justify-center items-center'>
      <div className='w-[700px]'>
        <AddExpenses />
        <Card className='w-full bg-gray-900 p-5 '>
          <FilterExpenses />
          <ExpenseFigure />
          <ItemContainer />
        </Card>
      </div>
    </div>
  )
}

export default ExpenseTrackerContainer
