import React from 'react'
// import Card from './Card'
import Card from '../UI/Card'
import ExpenseBar from './ExpenseBar'

const months = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
}

const ExpenseFigure = (props) => {
  const getTotalExpensesInMonth = (month) => {
    let curr_month_expenses = props.expenses.filter((expense) => {
      return expense.date.getMonth() === parseInt(month) && expense.date.getFullYear().toString() === props.filterYear
    })
    let total_amount = 0
    // console.log(curr_month_expenses)
    for (let expense of curr_month_expenses) {
      total_amount += parseInt(expense.amount)
    }
    const total_times = curr_month_expenses.length

    return [total_amount, total_times]
  }
  return (
    <Card className='bg-red-100 mb-3 py-2 justify-items-center w-full grid grid-cols-12 gap-2 '>
      {Object.keys(months).map((key) => {
        const [total_amount, total_times] = getTotalExpensesInMonth(months[key])
        return <ExpenseBar key={key} month={key} total_amount={total_amount} total_times={total_times} />
      })}
    </Card>
  )
}

export default ExpenseFigure
