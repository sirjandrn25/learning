import React from 'react'
import Card from './Card'
import { UseNoteContext } from './context/noteContext'

const SearchBar = () => {
  const { handleSearchNotes } = UseNoteContext()
  const [searchVal, setSearchVal] = React.useState('')

  const handleChange = (e) => {
    setSearchVal(e.target.value)
    handleSearchNotes(e.target.value)
  }
  return (
    <Card className=' my-6'>
      <input
        onChange={handleChange}
        value={searchVal}
        type='text'
        className='w-full border-2 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-4 focus:border-blue-300'
        placeholder='Search notes'
      />
    </Card>
  )
}

export default SearchBar
