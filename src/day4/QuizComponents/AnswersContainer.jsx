import React from 'react'
import CheckBox from '../UI/CheckBox'
import AnswerChoice from '../UI/AnswerChoice'
import AnswerButton from '../UI/AnswerButton'
const AnswersContainer = () => {
  return (
    <div className=' mt-5 grid grid-cols-2 gap-2 '>
      {/* <AnswerChoice answer={'Kathmandu'} />
        <AnswerChoice answer={'Dharan'} />
        <AnswerChoice answer={'NepalGung'} />
        <AnswerChoice answer={'Pokhara'} /> */}
      <AnswerButton option={'A'} answer={'Dharan'} />
      <AnswerButton option={'B'} answer={'Kathmandu'} />
      <AnswerButton option={'C'} answer={'Nepal Gunj'} />
      <AnswerButton option={'D'} answer={'Pokhara'} />
    </div>
  )
}

export default AnswersContainer
