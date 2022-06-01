import React from 'react'
// import Card from './Card'
import Card from './UI/Card'
import ItemContainer from './Expenses/ItemContainer'

import FilterExpenses from './Expenses/FilterExpenses'
import AddExpenses from './AddNewExpense/AddExpenses'
import ExpensesChart from './Expenses/ExpensesChart'

const item_list = [
  {
    id: 1,
    title: 'toilet paper',
    amount: 22.22,
    date: new Date('2022-05-12'),
  },
  {
    id: 2,
    title: 'house cleaner',
    amount: 44.22,
    date: new Date('2021-08-04'),
  },
]

const ExpenseTrackerContainer = () => {
  const [expenses, setExpenses] = React.useState([...item_list])
  const [filterYear, setFilterYear] = React.useState('2022')

  const addNewExpense = (expense) => {
    setExpenses((prev_expenses) => {
      return [expense, ...prev_expenses]
    })
  }
  const filterExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === filterYear)

  return (
    <div className='bg-gray-500 min-h-screen w-screen flex justify-center items-center'>
      <div className='w-[700px]'>
        <AddExpenses onAddNewExpense={addNewExpense} />
        <Card className='w-full bg-gray-900 p-5 '>
          <FilterExpenses onChangeFilterYear={setFilterYear} filterYear={filterYear} />
          {/* <ExpenseFigure expenses={filterExpenses} /> */}
          <ExpensesChart expenses={filterExpenses} />
          <ItemContainer items={filterExpenses} />
        </Card>
      </div>
    </div>
  )
}

export default ExpenseTrackerContainer
