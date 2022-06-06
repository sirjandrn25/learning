import React, { useState, useEffect } from 'react'

const useCounter = (forward = true) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (forward ? prevCount + 1 : prevCount - 1))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return count
}

export default useCounter
