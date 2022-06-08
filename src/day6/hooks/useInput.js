import React, { useState } from 'react'

const useInput = (validateFunc) => {
  const [inputValid, setInputValid] = useState(false)

  const [enteredValue, setEnteredValue] = useState('')
  const [inputTouch, setInputTouch] = useState(false)

  let inputError = inputTouch && validateFunc(enteredValue)

  const inputChangeHandler = (value) => {
    setEnteredValue(value.trim())
    if (inputError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }

  const blurHandler = (event) => {
    setInputTouch(true)
  }

  const reset = () => {
    setEnteredValue('')
    setInputTouch(false)
  }

  return {
    inputValid,
    inputError,
    inputChangeHandler,
    enteredValue,
    blurHandler,
    reset,
    inputTouchHandler: setInputTouch,
  }
}

export default useInput
