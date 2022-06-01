import React from 'react'

const NoteContext = React.createContext({
  notes: [],
  handleAddNewNote: () => {},
  handleDeleteNote: () => {},
  handleEditNote: () => {},
})

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = React.useState([])
  const [filterNotes, setFilterNotes] = React.useState([])
  React.useEffect(() => {
    getLocalStorage()
  }, [])

  const getLocalStorage = () => {
    const store_notes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : []
    setNotes((prev_notes) => {
      return [...store_notes]
    })
  }

  const handleAddNewNote = (note) => {
    setNotes((prev_notes) => {
      return [note, ...prev_notes]
    })
  }
  const handleDeleteNote = (note_id) => {
    // console.log(notes)
    const filterNotes = notes.filter((note) => note.id !== note_id)
    console.log(filterNotes)
    setNotes([...filterNotes])
    // console.log(notes)
    // setLocalStorage(notes)
  }

  const handleEditNote = (update_note) => {
    console.log(update_note)
    console.log(notes.map((note) => (update_note.id === note.id ? update_note : note)))
    setNotes((prev_notes) => {
      return prev_notes.map((note) => (update_note.id === note.id ? update_note : note))
    })
  }

  const handleSearchNotes = (searchVal) => {
    // console.log(searchVal)
    if (searchVal) {
      setFilterNotes(notes.filter((note) => note.title.startsWith(searchVal)))
    } else {
      setFilterNotes(notes)
    }
  }

  return (
    <NoteContext.Provider
      value={{ notes, handleAddNewNote, handleDeleteNote, handleEditNote, filterNotes, handleSearchNotes }}>
      {children}
    </NoteContext.Provider>
  )
}

export const UseNoteContext = () => {
  const { notes, handleAddNewNote, handleDeleteNote, handleEditNote, filterNotes, handleSearchNotes } =
    React.useContext(NoteContext)
  return { notes, handleAddNewNote, handleDeleteNote, handleEditNote, filterNotes, handleSearchNotes }
}
