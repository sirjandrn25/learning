import React from 'react'

const AnswerButton = (props) => {
  return (
    <>
      <button className='rounded-lg bg-gray-900 border-cyan-500 px-3 py-1 mb-3 border-2 w-full flex justify-start items-center text-slate-300 hover:bg-gray-700 active:bg-cyan-600'>
        <span className='text-teal-600 text-[20px] font-bold mr-3'>{props.option}.</span>
        <span className='text-white text-[22px] font-normal '>{props.answer}</span>
      </button>
    </>
  )
}

export default AnswerButton
