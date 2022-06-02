import React from 'react'

import NoteCard from '../UI/NoteCard'
import { UseNoteContext } from '../context/noteContext'

const NoteList = () => {
  const { notes, searchVal } = UseNoteContext()

  let renderNotes = notes.map((note) => <NoteCard bg_color={'bg-yellow-300'} note={note} key={note.id} />)

  if (searchVal) {
    renderNotes = notes
      .filter((note) => note.title.startsWith(searchVal))
      .map((note) => <NoteCard bg_color={'bg-yellow-300'} note={note} key={note.id} />)
  }
  return (
    <div className='w-full grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 '>
      {renderNotes}

      <NoteCard bg_color={'bg-blue-300'} />
    </div>
  )
}

export default NoteList
