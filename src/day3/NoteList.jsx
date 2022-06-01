import React from 'react'
import Card from './Card'
import AddNewNote from './AddNewNote'
import NoteCard from './NoteCard'
import { UseNoteContext } from './context/noteContext'

const NoteList = () => {
  const { notes } = UseNoteContext()
  console.log(notes)
  return (
    <div className='w-full grid grid-cols-3 gap-3 '>
      {notes.map((note) => (
        <NoteCard bg_color={'bg-yellow-300'} note={note} key={note.id} />
      ))}

      <NoteCard bg_color={'bg-blue-300'} />
    </div>
  )
}

export default NoteList
