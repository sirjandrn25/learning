import React, { useState } from 'react'

const useInput = (validatedInput) => {
  const [enterValue, setEnterValue] = useState('')
  const [inputTouch, setInputTouch] = useState(false)
  const [isInputValid, setIsInputValid] = useState(false)

  let inputError = inputTouch && validatedInput(enterValue)

  const handleChangeInputValue = (event) => {
    setEnterValue(event.target.value)
    if (inputError) {
      setIsInputValid(false)
    } else {
      setIsInputValid(true)
    }
  }

  const handleInputBlur = (event) => {
    setInputTouch(true)
  }

  const resetFunc = () => {
    setInputTouch(false)
    setEnterValue('')
  }

  return {
    value: enterValue,
    inputBlurHandler: handleInputBlur,
    inputChangeHandler: handleChangeInputValue,
    error: inputError,
    inputTouchHandler: setInputTouch,
    resetHandler: resetFunc,
    isInputValid: isInputValid,
  }
}

export default useInput
