import React from 'react'
import CheckBox from '../UI/CheckBox'
import AnswerChoice from '../UI/AnswerChoice'
import AnswerButton from '../UI/AnswerButton'
import { UseQuizQuestion } from '../context/quizContext'

const option_labels = ['A', 'B', 'C', 'D']
const AnswersContainer = () => {
  const { question, handleAnswerCheck } = UseQuizQuestion()
  return (
    <div className=' mt-5 grid grid-cols-2 gap-2 '>
      {question.answers.map((answer, index) => {
        return (
          <AnswerButton onCheckAnswer={handleAnswerCheck} option={option_labels[index]} answer={answer} key={index} />
        )
      })}
    </div>
  )
}

export default AnswersContainer
