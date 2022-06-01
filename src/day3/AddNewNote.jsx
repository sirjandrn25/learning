import React from 'react'
import Card from './Card'

const AddNewNote = () => {
  const [value, setValue] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  return (
    <Card className='h-[250px] bg-blue-500 w-full'>
      <form action='' method='post' onSubmit={handleSubmit}>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={200}
          placeholder='Add new note'
          className='w-full h-[180px] resize-none rounded-lg bg-blue-500 text-slate-200 p-2 focus:outline-none focus:border-4 focus:border-teal-400'
        />
        <div className='w-full h-auto mt-3 flex flex-row justify-between items-center'>
          <span className='text-gray-900 font-normal'>{200 - value.length} Remaining</span>
          <button className='px-3 rounded-xl bg-gray-500 text-white py-1'>save</button>
        </div>
      </form>
    </Card>
  )
}

export default AddNewNote
