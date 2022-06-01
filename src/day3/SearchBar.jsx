import React from 'react'
import Card from './Card'

const SearchBar = () => {
  return (
    <Card className=' my-6'>
      <input
        type='text'
        className='w-full border-2 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-4 focus:border-blue-300'
        placeholder='Search notes'
      />
    </Card>
  )
}

export default SearchBar
