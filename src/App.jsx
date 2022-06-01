import React from 'react'
import LoginContainer from './day1/LoginContainer'
import ExpenseTrackerContainer from './day2/ExpenseTrackerContainer'
import NoteAppContainer from './day3/NoteAppContainer'
import { NoteProvider } from './day3/context/noteContext'

const App = () => {
  return (
    <div>
      <NoteProvider>
        <NoteAppContainer />
      </NoteProvider>
    </div>
  )
}

export default App
