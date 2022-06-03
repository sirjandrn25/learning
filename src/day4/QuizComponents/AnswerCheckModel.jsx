import React from 'react'
import Card from '../UI/Card'
import { UseQuizQuestion } from '../context/quizContext'

const AnswerCheckModel = () => {
  const { ansStatus, handleNextQuestion, question } = UseQuizQuestion()
  let renderAnsStatus = (
    <>
      <span className='text-green-500 text-[22px] '>Correct Answer</span>
      <span className='text-teal-500 font-bold text-[20px]'>You Earn {question.point} point</span>
    </>
  )

  if (ansStatus === 'wrong') {
    renderAnsStatus = (
      <>
        <span className='text-red-500 text-[22px] '>Wrong Answer</span>
        {/* <span className='text-teal-500 font-bold text-[20px]'>You loss {question.point} point</span> */}
      </>
    )
  }
  return (
    <div
      className={`w-screen h-screen bg-black/40 absolute flex justify-center ${
        ansStatus ? 'visible' : 'invisible'
      }  items-center`}>
      <Card className='bg-slate-200 h-[180px] w-[300px] flex flex-col justify-center items-center'>
        {renderAnsStatus}
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
