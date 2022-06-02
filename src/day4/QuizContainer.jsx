import React from 'react'
import ScoreContainer from './QuizComponents/ScoreContainer'
import QuizCard from './QuizComponents/QuizCard'
import AnswerCheckModel from './QuizComponents/AnswerCheckModel'

const QuizContainer = () => {
  return (
    <div className='h-screen w-screen relative flex flex-col justify-center items-center bg-gray-600'>
      <div className='w-[800px] absolute h-auto'>
        <ScoreContainer />
        <QuizCard />
      </div>
      <AnswerCheckModel />
    </div>
  )
}

export default QuizContainer
