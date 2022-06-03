import React from 'react'
// import LoginContainer from './day1/LoginContainer'
// import ExpenseTrackerContainer from './day2/ExpenseTrackerContainer'
// import NoteAppContainer from './day3/NoteAppContainer'
// import { NoteProvider } from './day3/context/noteContext'
import { Link } from 'react-router-dom'

const App = () => {
  const [count, setCount] = React.useState(0)

  const incrementCount = () => {
    setCount((prev) => prev + 1)
    console.log(count)
  }

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={incrementCount}>increment</button>
    </>
  )
}

// const App = () => {
//   return (
//     <div className='flex flex-row justify-center items-center h-screen w-screen'>
//       <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/login-day1'>
//         <span>Day1</span>
//         <span className='text-cyan-500'>Login Model</span>
//       </a>
//       <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/expense-tracker-day2'>
//         <span>Day2</span>
//         <span className='text-cyan-500'>Expense Tracker</span>
//       </a>
//       <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/noteapp-day3'>
//         <span>Day3</span>
//         <span className='text-cyan-500'>NoteApp</span>
//       </a>
//       <a target={'_blank'} className='mr-6 border-2 p-5 flex flex-col ' href='/quiz-day4'>
//         <span>Day4</span>
//         <span className='text-cyan-500'>quiz App</span>
//       </a>
//     </div>
//   )
// }

export default App
