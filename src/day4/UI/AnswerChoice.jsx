import React from 'react'

const AnswerChoice = (props) => {
  return (
    <div class='form-check'>
      <input
        class='form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
        type='checkbox'
        value=''
        name='answer'
        id='flexCheckDefault'
      />
      <label class='form-check-label inline-block text-white text-[24px]' for='flexCheckDefault'>
        {props.answer}
      </label>
    </div>
  )
}

export default AnswerChoice
