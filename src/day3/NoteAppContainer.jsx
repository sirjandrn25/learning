import React from 'react'
import Navbar from './Navbar'
import NoteList from './NoteList'
import SearchBar from './SearchBar'

const NoteAppContainer = () => {
  return (
    <div className='min-h-screen w-screen'>
      <header>
        <Navbar />
      </header>
      <main className='w-[1200px] mx-auto'>
        <SearchBar />
        <NoteList />
      </main>
    </div>
  )
}

export default NoteAppContainer
