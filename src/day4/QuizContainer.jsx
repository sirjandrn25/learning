import React, { useEffect } from 'react'
import ScoreContainer from './QuizComponents/ScoreContainer'
import QuizCard from './QuizComponents/QuizCard'
import AnswerCheckModel from './QuizComponents/AnswerCheckModel'
// import StartContainer from './QuizComponents/StartContainer'
import { QuizProvider } from './context/quizContext'
const QuizContainer = () => {
  return (
    <>
      <QuizProvider>
        <div className='w-[800px] absolute h-auto'>
          <ScoreContainer />
          <QuizCard />
        </div>
        <AnswerCheckModel />
      </QuizProvider>
    </>
  )
}

export default QuizContainer
