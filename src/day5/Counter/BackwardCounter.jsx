import React from 'react'
import useCounter from '../hooks/useCounter'

const BackwardCounter = () => {
  const count = useCounter(false)
  return <div>backward counter {count}</div>
}

export default BackwardCounter
