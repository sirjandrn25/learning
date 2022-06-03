import React from 'react'
import Card from '../UI/Card'
import { UseQuizQuestion } from '../context/quizContext'

const AnswerCheckModel = () => {
  const { ansStatus, answerInfo, score, handleNextQuestion, question, gameOver } = UseQuizQuestion()
  let renderStatus = (
    <>
      <span className='text-green-500 text-[22px] '>Correct Answer</span>
      <span className='text-teal-500 font-bold text-[20px]'>You Earn {question.point} point</span>
    </>
  )

  if (ansStatus === 'wrong') {
    renderStatus = (
      <>
        <span className='text-red-500 text-[22px] '>Wrong Answer</span>
        {/* <span className='text-teal-500 font-bold text-[20px]'>You loss {question.point} point</span> */}
      </>
    )
  }

  if (gameOver) {
    renderStatus = (
      <>
        <span className='text-[28px] text-gray-600'>Total Score {score}</span>
        <span className='text-red-600'>Wrong Answers : {answerInfo.totalAttempt - answerInfo.correctAnswer}</span>
        <span className='text-green-500'>Correct Answers : {answerInfo.correctAnswer}</span>
        <span className='text-teal-400'>Total Attempt : {answerInfo.totalAttempt}</span>
      </>
    )
  }
  return (
    <div
      className={`w-screen h-screen bg-black/40 absolute flex justify-center ${
        ansStatus ? 'visible' : 'invisible'
      }  items-center`}>
      <Card className='bg-slate-200 h-[180px] w-[300px] flex flex-col justify-center items-center'>
        {renderStatus}
        <button
          onClick={handleNextQuestion}
          className='bg-cyan-500 rounded-lg px-5 py-1 text-white mt-5 font-bold hover:bg-cyan-700'>
          ok
        </button>
      </Card>
    </div>
  )
}

export default AnswerCheckModel
