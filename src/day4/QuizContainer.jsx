import React from 'react'
import ScoreContainer from './QuizComponents/ScoreContainer'
import QuizCard from './QuizComponents/QuizCard'
import AnswerCheckModel from './QuizComponents/AnswerCheckModel'
import StartContainer from './QuizComponents/StartContainer'

const QuizContainer = () => {
  let afterStart = (
    <>
      <div className='w-[800px] absolute h-auto'>
        <ScoreContainer />
        <QuizCard />
      </div>
      <AnswerCheckModel />
    </>
  )
  return (
    <div className='h-screen w-screen relative flex flex-col justify-center items-center bg-gray-600'>
      {/* <StartContainer /> */}
      {afterStart}
    </div>
  )
}

export default QuizContainer
