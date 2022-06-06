import React from 'react'
import useCounter from './hooks/useCounter'
import ForwardCounter from './Counter/ForwardCounter'
import BackwardCounter from './Counter/BackwardCounter'
const CounterContainer = () => {
  const count = useCounter()
  return (
    <div>
      <ForwardCounter />
      <BackwardCounter />
    </div>
  )
}

export default CounterContainer
