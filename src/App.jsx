import React from 'react'
// import LoginContainer from './day1/LoginContainer'
// import ExpenseTrackerContainer from './day2/ExpenseTrackerContainer'
// import NoteAppContainer from './day3/NoteAppContainer'
// import { NoteProvider } from './day3/context/noteContext'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import PracticeContainer from './day5/PracticeContainer'

// const App = () => {
//   const [isOpen, setIsOpen] = React.useState(false)

//   const closeModal = () => setIsOpen(false)

//   return (
//     <div className='z-20'>
//       <h1>App component</h1>
//       <button className='bg-black rounded-lg px-6 py-1 text-white' onClick={(e) => setIsOpen(true)}>
//         Open Model
//       </button>
//       <Modal open={isOpen} onCloseModal={closeModal}>
//         model contents be here
//       </Modal>
//     </div>
//     <>
//       <PracticeContainer />
//     </>
//   )
// }

const App = () => {
  return (
    <div className='flex flex-row justify-center items-center h-screen w-screen'>
      <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/login-day1'>
        <span>Day1</span>
        <span className='text-cyan-500'>Login Model</span>
      </a>
      <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/expense-tracker-day2'>
        <span>Day2</span>
        <span className='text-cyan-500'>Expense Tracker</span>
      </a>
      <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/noteapp-day3'>
        <span>Day3</span>
        <span className='text-cyan-500'>NoteApp</span>
      </a>
      <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/quiz-day4'>
        <span>Day4</span>
        <span className='text-cyan-500'>quiz App</span>
      </a>
      <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/food-order-day6'>
        <span>Day6</span>
        <span className='text-cyan-500'>Food Order App</span>
      </a>
    </div>
  )
}

export default App
