import React from 'react'
import Card from '../UI/Card'

const AddExpenses = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <Card className='bg-purple-600 w-full p-5 flex justify-center items-center mb-3'>
      {open ? (
        <Form handleOpen={handleOpen} />
      ) : (
        <button className='bg-purple-900 rounded-xl text-white font-bold p-5' onClick={handleOpen}>
          Add New Expenses
        </button>
      )}
    </Card>
  )
}

const Form = ({ handleOpen }) => {
  return (
    <form className='w-full '>
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
          />
        </div>
      </div>
      <div className='mt-3 w-full flex justify-end'>
        <button
          onClick={handleOpen}
          className='border-purple-900 font-bold mr-3 px-5 rounded-lg hover:bg-yellow-500 hover:text-white '>
          cancel
        </button>
        <button className='bg-teal-400 p-3 rounded-lg text-white'>Add Expenses</button>
      </div>
    </form>
  )
}

export default AddExpenses
