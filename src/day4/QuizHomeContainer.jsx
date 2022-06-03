import React from 'react'
import { Link } from 'react-router-dom'

const QuizHomeContainer = () => {
  return (
    <div>
      <Link
        to='game'
        className='bg-emerald-800 border-2 border-teal-300 px-6 py-1 rounded-lg text-white font-bold text-[20px]'>
        start Game
      </Link>
    </div>
  )
}

export default QuizHomeContainer
