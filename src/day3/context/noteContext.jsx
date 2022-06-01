import React from 'react'

const NoteContext = React.createContext({
  notes: [],
  handleAddNewNote: () => {},
  handleDeleteNote: () => {},
  handleEditNote: () => {},
})

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = React.useState([])

  const handleAddNewNote = (note) => {
    console.log(notes)
    setNotes((prev_notes) => {
      return [note, ...prev_notes]
    })
  }
  const handleDeleteNote = (note_id) => {
    console.log(notes)
    const filterNotes = notes.filter((note) => note.id !== note_id)
    console.log(filterNotes)
    setNotes((prev_notes) => {
      return [...filterNotes]
    })
  }

  const handleEditNote = (update_note) => {
    setNotes((prev_notes) => {
      return prev_notes.map((note) => (update_note.id === note.id ? update_note : note))
    })
  }

  return (
    <NoteContext.Provider value={{ notes, handleAddNewNote, handleDeleteNote, handleEditNote }}>
      {children}
    </NoteContext.Provider>
  )
}

export const UseNoteContext = () => {
  const { notes, handleAddNewNote, handleDeleteNote, handleEditNote } = React.useContext(NoteContext)
  return { notes, handleAddNewNote, handleDeleteNote, handleEditNote }
}
