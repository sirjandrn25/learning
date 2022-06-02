import React from 'react'
import Card from '../UI/Card'
import { UseQuizQuestion } from '../context/quizContext'

const ScoreContainer = () => {
  const { score, answerInfo } = UseQuizQuestion()
  return (
    <Card className='my-5 bg-slate-800 flex flex-row px-7 justify-around items-center h-[120px] w-full'>
      <div className=' flex flex-row '>
        <div className='flex flex-row items-center mr-5'>
          <span className='text-slate-300 mr-2 text-[20px]'>Score </span>
          <div>
            <span className='font-bold text-[35px] text-white'>{score}</span>
            <span className='font-medium text-[16px] text-teal-500'> /150</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-red-600'>Wrong Answers : {answerInfo.totalAttempt - answerInfo.correctAnswer}</span>
          <span className='text-green-500'>Correct Answers : {answerInfo.correctAnswer}</span>
          <span className='text-teal-400'>Total Attempt : {answerInfo.totalAttempt}</span>
        </div>
      </div>
      <div className=' p-3 flex flex-row items-center'>
        <div className='flex flex-col justify-center items-center mr-2 '>
          <span className='text-teal-500 font-bold text-[24px] leading-5'>120</span>
          <span className='text-slate-300'>seconds</span>
        </div>
        <span className='ml-2 text-slate-200 font-medium text-[22px]'>Remaining</span>
      </div>
    </Card>
  )
}

export default ScoreContainer
