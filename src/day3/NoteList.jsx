import React from 'react'
import Card from './Card'
import AddNewNote from './AddNewNote'
import NoteCard from './NoteCard'
import { UseNoteContext } from './context/noteContext'

const NoteList = () => {
  const { notes, filterNotes } = UseNoteContext()
  React.useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    }, 1000)
  }, [notes])
  //   console.log(handleEditNote)

  let renderNotes = notes.map((note) => <NoteCard bg_color={'bg-yellow-300'} note={note} key={note.id} />)
  //   let renderNotes = filterNotes.map((note) => <NoteCard bg_color={'bg-yellow-300'} note={note} key={note.id} />)
  if (filterNotes.length) {
    renderNotes = filterNotes.map((note) => <NoteCard bg_color={'bg-yellow-300'} note={note} key={note.id} />)
  }

  return (
    <div className='w-full grid grid-cols-3 gap-3 '>
      {renderNotes}

      <NoteCard bg_color={'bg-blue-300'} />
    </div>
  )
}

export default NoteList
