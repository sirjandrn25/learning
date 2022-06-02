import React from 'react'
import { UseQuizQuestion } from '../context/quizContext'

const QuestionContainer = () => {
  const { question } = UseQuizQuestion()
  return (
    <div className='p-3 w-full h-auto'>
      <div>
        <span className='font-medium text-slate-200 text-[35px]'>Question {question.questionNo}</span>
        <span className='text-white'>/ 10</span>
      </div>
      <div className='text-slate-200 text-[24px] font-normal my-3 px-6'>{question.question}</div>
    </div>
  )
}

export default QuestionContainer
