import React from 'react'
import Card from '../UI/Card'
import AnswersContainer from './AnswersContainer'
import QuestionContainer from './QuestionContainer'

const QuizContainer = () => {
  return (
    <Card className=' bg-gray-900 border-2 border-cyan-400 grid grid-cols-1 gap-0  h-[400px] w-full '>
      <QuestionContainer />
      <AnswersContainer />
    </Card>
  )
}

export default QuizContainer
