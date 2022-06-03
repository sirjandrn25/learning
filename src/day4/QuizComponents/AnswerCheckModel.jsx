import React from 'react'
import Card from '../UI/Card'
import { UseQuizQuestion } from '../context/quizContext'
import { Link } from 'react-router-dom'

const AnswerCheckModel = () => {
  const { ansStatus, answerInfo, handleNextQuestion, question, score } = UseQuizQuestion()
  let renderStatus = (
    <>
      <span className='text-green-500 text-[22px] '>Correct Answer</span>
      <span className='text-teal-500 font-bold text-[20px]'>You Earn {question.point} point</span>
      <button
        onClick={handleNextQuestion}
        className='bg-cyan-500 rounded-lg px-5 py-1 text-white mt-5 font-bold hover:bg-cyan-700'>
        ok
      </button>
    </>
  )

  if (ansStatus === 'wrong') {
    renderStatus = (
      <>
        <span className='text-red-500 text-[22px] '>Wrong Answer</span>
        <button
          onClick={handleNextQuestion}
          className='bg-cyan-500 rounded-lg px-5 py-1 text-white mt-5 font-bold hover:bg-cyan-700'>
          ok
        </button>
        {/* <span className='text-teal-500 font-bold text-[20px]'>You loss {question.point} point</span> */}
      </>
    )
  } else if (ansStatus === 'gameOver') {
    renderStatus = (
      <>
        <span className='text-[35px] text-gray-600 font-bold'>Total Score {score}</span>
        <span className='text-red-600 text-[25px]'>
          Wrong Answers : {answerInfo.totalAttempt - answerInfo.correctAnswer}
        </span>
        <span className='text-green-500 text-[25px]'>Correct Answers : {answerInfo.correctAnswer}</span>
        <span className='text-teal-400 text-[25px]'>Total Attempt : {answerInfo.totalAttempt}</span>

        <Link to='/quiz-day4' className='border-2 border-cyan-300 rounded-lg my-3 bg-gray-800 text-white px-6 py-1 '>
          Play Again
        </Link>
      </>
    )
  }
  return (
    <div
      className={`w-screen h-screen bg-black/40 absolute flex justify-center ${
        ansStatus ? 'visible' : 'invisible'
      }  items-center`}>
      <Card className='bg-slate-200  h-[280px] w-[500px] flex flex-col justify-center items-center'>
        {renderStatus}
      </Card>
    </div>
  )
}

export default AnswerCheckModel
