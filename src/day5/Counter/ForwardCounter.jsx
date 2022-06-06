import React from 'react'
import useCounter from '../hooks/useCounter'

const ForwardCounter = () => {
  const count = useCounter()
  return <div>Forward Counter {count}</div>
}

export default ForwardCounter
