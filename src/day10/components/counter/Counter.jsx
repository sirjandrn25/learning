import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../../store'

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()
  const { increment, decrement, incrementByAmount, toggleShow } = counterActions

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(5))
  }

  const toggleHandler = () => {
    dispatch(toggleShow())
  }

  return (
    <Card className=' bg-white border-2 flex flex-col justify-center items-center border-cyan-400 w-[700px]  h-[200px] '>
      {counter.show ? (
        <div className='rounded-lg p-2 text-lg bg-blue-600 text-white font-bold w-[80px] text-center'>
          {counter.counter}
        </div>
      ) : null}
      <div className='mt-7  '>
        <Button onClick={incrementHandler} className='bg-blue-600 mr-6'>
          increment
        </Button>
        <Button onClick={decrementHandler} className='bg-blue-600 mr-6'>
          decrement
        </Button>
        <Button onClick={incrementByAmountHandler} className='bg-blue-600 mr-6'>
          increment by 5
        </Button>
        <Button onClick={toggleHandler} className='bg-blue-600 mr-6'>
          toggle
        </Button>
      </div>
    </Card>
  )
}

export default Counter
