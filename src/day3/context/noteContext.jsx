import React from 'react'

const NoteContext = React.createContext({
  notes: [],
  handleAddNewNote: () => {},
  handleDeleteNote: () => {},
  handleEditNote: () => {},
})

const retrieveLocalStorage = () => {
  return localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
}

const updateLocalStorage = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = React.useState(retrieveLocalStorage())

  const [searchVal, setSearchVal] = React.useState('')
  React.useEffect(() => {
    setTimeout(() => {
      updateLocalStorage(notes)
    }, 1000)
  }, [notes])

  const handleAddNewNote = (note) => {
    setNotes((prev_notes) => {
      return [note, ...prev_notes]
    })
  }
  const handleDeleteNote = (note_id) => {
    const filterNotes = notes.filter((note) => note.id !== note_id)
    setNotes([...filterNotes])
  }

  const handleEditNote = (update_note) => {
    setNotes((prev_notes) => {
      return prev_notes.map((note) => (update_note.id === note.id ? update_note : note))
    })
  }

  return (
    <NoteContext.Provider
      value={{ notes, handleAddNewNote, handleDeleteNote, handleEditNote, searchVal, setSearchVal }}>
      {children}
    </NoteContext.Provider>
  )
}

export const UseNoteContext = () => {
  const { notes, handleAddNewNote, handleDeleteNote, handleEditNote, searchVal, setSearchVal } =
    React.useContext(NoteContext)

  return { notes, handleAddNewNote, handleDeleteNote, handleEditNote, searchVal, setSearchVal }
}
