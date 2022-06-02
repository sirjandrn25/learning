import React from 'react'

import Card from './Card'
import { UseNoteContext } from '../context/noteContext'

const NoteCard = (props) => {
  const [value, setValue] = React.useState(props.note ? props.note.title : '')
  const [edit, setEdit] = React.useState(false)
  const { handleDeleteNote, handleAddNewNote, handleEditNote } = UseNoteContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const new_note = {
      id: Math.floor(Math.random() * 1000),
      title: value,
      date: new Date().toLocaleDateString(),
    }

    handleAddNewNote(new_note)
    setValue('')
  }

  let renderBottomActionLabel = (
    <>
      <span className='text-gray-900 font-normal'>{200 - value.length} Remaining</span>
      {props.note && edit ? (
        <span className='animate-spin h-5 w-5 mr-3 bg-purple-600' viewBox='0 0 24 24'></span>
      ) : (
        <button type='submit' className='px-3 rounded-xl bg-gray-500 text-white py-1'>
          save
        </button>
      )}
    </>
  )
  if (props.note && !edit) {
    renderBottomActionLabel = (
      <>
        <span className='text-gray-900 font-normal'>{props.note.date}</span>
        <button
          onClick={(e) => handleDeleteNote(props.note.id)}
          className='px-3 rounded-xl bg-gray-500 text-white py-1'>
          delete
        </button>
      </>
    )
  }

  const handleFocus = () => {
    setEdit(true)
  }

  const handleBlur = () => {
    if (props.note) {
      setEdit(false)
      if (value.length) {
        handleEditNote({
          ...props.note,
          title: value,
        })
      } else {
        handleDeleteNote(props.note.id)
      }
    }
  }

  return (
    <Card className={`h-[250px] w-full ${props.bg_color}`}>
      <form action='' method='post' onSubmit={handleSubmit}>
        <textarea
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={200}
          placeholder='Add new note'
          className={`w-full h-[180px] resize-none rounded-lg ${props.bg_color} text-gray-700 p-2 focus:outline-none focus:border-4 focus:border-teal-400`}
          required
        />
        <div className='w-full h-auto mt-3 flex flex-row justify-between items-center'>{renderBottomActionLabel}</div>
      </form>
    </Card>
  )
}

export default NoteCard
