import React from 'react'
import ScoreContainer from './QuizComponents/ScoreContainer'
import QuizCard from './QuizComponents/QuizCard'

const QuizContainer = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gray-600'>
      <div className='w-[800px] h-auto'>
        <ScoreContainer />
        <QuizCard />
      </div>
    </div>
  )
}

export default QuizContainer
