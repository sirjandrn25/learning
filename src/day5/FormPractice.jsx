import React from 'react'
import Input from './UI/InputField'
import useInput from './hooks/useInput'

const isEmpty = (value) => {
  return value.trim() === '' ? 'this field may be required' : false
}

const isEmail = (value) => {
  const isValue = isEmpty(value)
  if (!isValue) {
    return !value.includes('@') ? 'email address is not valid ' : false
  }
  return isValue
}

const FormPractice = () => {
  const {
    value: enterFullName,
    inputChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    error: fullNameError,
    inputTouchHandler: fullNameTouchHandler,
    resetHandler: fullNameResetHandler,
    isInputValid: isFullNameValid,
  } = useInput(isEmpty)

  const {
    value: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    error: emailError,
    inputTouchHandler: emailTouchHandler,
    resetHandler: emailResetHandler,
    inputBlurHandler: emailBlurHandler,
    isInputValid: isEmailValid,
  } = useInput(isEmail)

  let isFormValid = false
  if (isFullNameValid && isEmailValid) {
    isFormValid = true
  }
  console.log(isFullNameValid, isEmailValid)

  const handleSubmit = (event) => {
    event.preventDefault()
    fullNameTouchHandler(true)
    emailTouchHandler(true)

    if (!isFormValid) {
      return
    }
    console.log(enteredEmail)
    fullNameResetHandler()
    emailResetHandler()
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <form action='' onSubmit={handleSubmit} className='flex flex-col' method='post'>
        <input
          onBlur={fullNameBlurHandler}
          value={enterFullName}
          onChange={fullNameChangeHandler}
          type={'text'}
          placeholder='enter name'
          className='border-2 p-2'
        />
        {fullNameError && <p className='text-red-500'>{fullNameError}</p>}
        <input
          onBlur={emailBlurHandler}
          value={enteredEmail}
          onChange={emailChangeHandler}
          type={'text'}
          placeholder='enter email address'
          className='border-2 p-2'
        />
        {emailError && <p className='text-red-500'>{emailError}</p>}
        <button className='p-2 border-2 w-[50px] mt-3'>save</button>
      </form>
    </div>
  )
}

export default FormPractice
