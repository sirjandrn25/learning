import React from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1

    case 'reset':
      return (state = 0)
  }
}

const CounterContainer = () => {
  const [count, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div>
      <div>Count - {count}</div>
      <button className='border-2 mr-2' onClick={(e) => dispatch('increment')}>
        increment
      </button>
      <button className='border-2 mr-2' onClick={(e) => dispatch('decrement')}>
        decrement
      </button>
      <button className='border-2 mr-2' onClick={(e) => dispatch('reset')}>
        reset
      </button>
    </div>
  )
}

export default CounterContainer
