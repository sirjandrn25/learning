import React from 'react'
import Card from '../UI/Card'

const AddExpenses = (props) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <Card className='bg-purple-600 w-full p-5 flex justify-center items-center mb-3'>
      {open ? (
        <Form handleOpen={handleOpen} onAddNewExpense={props.onAddNewExpense} />
      ) : (
        <button className='bg-purple-900 rounded-xl text-white font-bold p-5' onClick={handleOpen}>
          Add New Expenses
        </button>
      )}
    </Card>
  )
}

const convertDoubleDigit = (digit) => {
  return digit < 10 ? '0' + digit : digit
}

const currDate = () => {
  const d = new Date()
  return d.getFullYear() + '-' + convertDoubleDigit(d.getMonth()) + '-' + convertDoubleDigit(d.getDate())
}

const Form = ({ handleOpen, onAddNewExpense }) => {
  const [title, setTitle] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [date, setDate] = React.useState('2022-02-12')

  const handleTitle = (e) => setTitle(e.target.value)
  const handleAmount = (e) => setAmount(e.target.value)
  const handleDate = (e) => setDate(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const new_expense = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      amount: +amount,
      date: new Date(date),
    }
    onAddNewExpense(new_expense)
  }

  return (
    <form className='w-full ' method='post' onSubmit={handleSubmit}>
      <div className='grid grid-cols-2 gap-3'>
        <div className='flex flex-col'>
          <label htmlFor='id_title' className='text-gray-900 font-bold mb-1'>
            Title
          </label>
          <input
            type='text'
            id='id_title'
            className='rounded-xl py-2 px-3 text-gray-600 focus:outline-none focus:border-4 focus:border-blue-400 '
            placeholder='Expense Title'
            onChange={handleTitle}
            value={title}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='id_amount' className='text-gray-900 font-bold mb-1'>
            Amount
          </label>
          <input
            type='number'
            id='id_title'
            className='rounded-xl py-2 px-3 text-gray-600 focus:outline-none focus:border-4 focus:border-blue-400 '
            placeholder='Expense Amount'
            onChange={handleAmount}
            value={amount}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='id_title' className='text-gray-900 font-bold mb-1'>
            Date
          </label>
          <input
            type='date'
            id='id_title'
            className='rounded-xl py-2 px-3 text-gray-600 focus:outline-none focus:border-4 focus:border-blue-400 '
            placeholder='Expense Date'
            onChange={handleDate}
            value={date}
          />
        </div>
      </div>
      <div className='mt-3 w-full flex justify-end'>
        <button
          onClick={handleOpen}
          className='border-purple-900 font-bold mr-3 px-5 rounded-lg hover:bg-yellow-500 hover:text-white '>
          cancel
        </button>
        <button type='submit' className='bg-teal-400 p-3 rounded-lg text-white'>
          Add Expenses
        </button>
      </div>
    </form>
  )
}

export default AddExpenses
