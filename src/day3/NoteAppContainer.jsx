import React from 'react'
import Navbar from './Features/Navbar'
import NoteList from './NoteItems/NoteList'
import SearchBar from './Features/SearchBar'

const NoteAppContainer = () => {
  return (
    <div className='min-h-screen w-screen'>
      <header>
        <Navbar />
      </header>
      <main className=' w-auto px-3 lg:w-[1200px] mx-auto'>
        <SearchBar />
        <NoteList />
      </main>
    </div>
  )
}

export default NoteAppContainer
