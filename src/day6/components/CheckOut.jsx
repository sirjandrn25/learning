import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

import useInput from '../hooks/useInput'
import { useFoodContext } from '../context/foodContext'

const isEmpty = (value) => {
  return value === '' ? 'this field may not be empty' : false
}

const isEmail = (value) => {
  let checkEmpty = isEmpty(value)
  if (checkEmpty) {
    return checkEmpty
  }
  return !value.includes('@') ? 'this field not contain @ ' : false
}

const isNumber = (value) => {
  let checkEmpty = isEmpty(value)
  if (checkEmpty) {
    return checkEmpty
  }
  if (/^\d+$/.test(value)) {
    return value.length != 10 ? '10 numeric digits are required' : false
  }
  return 'only numeric values are allowed'
}

const CheckOut = () => {
  const { carts } = useFoodContext()
  const {
    enteredValue: fName,
    inputChangeHandler: fNameChangeHandler,
    blurHandler: fNameBlurHandler,
    inputError: fNameError,
    inputValid: fNameValid,
    reset: fNameReset,
    inputTouchHandler: fNameTouchHandler,
  } = useInput(isEmpty)

  const {
    enteredValue: lName,
    inputChangeHandler: lNameChangeHandler,
    blurHandler: lNameBlurHandler,
    inputError: lNameError,
    inputValid: lNameValid,
    reset: lNameReset,
    inputTouchHandler: lNameTouchHandler,
  } = useInput(isEmpty)

  const {
    enteredValue: email,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    inputError: emailError,
    inputValid: emailValid,
    reset: emailReset,
    inputTouchHandler: emailTouchHandler,
  } = useInput(isEmail)

  const {
    enteredValue: contactNo,
    inputChangeHandler: contactNoChangeHandler,
    blurHandler: contactNoBlurHandler,
    inputError: contactNoError,
    inputValid: contactNoValid,
    reset: contactNoReset,
    inputTouchHandler: contactNoTouchHandler,
  } = useInput(isNumber)
  const {
    enteredValue: address,
    inputChangeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    inputError: addressError,
    inputValid: addressValid,
    reset: addressReset,
    inputTouchHandler: addressTouchHandler,
  } = useInput(isEmpty)

  let formValid = fNameValid && lNameValid && emailValid && contactNoValid && addressValid
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formValid) {
      fNameTouchHandler(true)
      lNameTouchHandler(true)
      emailTouchHandler(true)
      contactNoTouchHandler(true)
      addressTouchHandler(true)
    }

    const orderData = {
      fName,
      lName,
      email,
      contactNo,
      address,
      items: carts,
      orderId: Math.floor(Math.random() * 10000),
      orderStatus: 'pending',
    }

    console.log(orderData)
    console.log('submit form')
    // fNameReset()
    // lNameReset()
    // emailReset()
    // contactNoReset()
    // addressReset()
  }
  return (
    <div className='w-full h-auto  p-5'>
      <p className='text-lg font-bold capitalize my-2'>CheckOut Form</p>
      <hr />
      <form onSubmit={handleSubmit} action='' className='mt-5 grid grid-cols-2 gap-2'>
        <Input
          value={fName}
          onChange={fNameChangeHandler}
          onBlur={fNameBlurHandler}
          error={fNameError}
          type='text'
          label={'First Name'}
          placeholder='enter first name'
        />
        <Input
          value={lName}
          onChange={lNameChangeHandler}
          onBlur={lNameBlurHandler}
          error={lNameError}
          type='text'
          label={'Last Name'}
          placeholder='enter last name'
        />
        <Input
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          error={emailError}
          type='email'
          label={'Email Address'}
          placeholder='enter email address'
        />
        <Input
          value={contactNo}
          onChange={contactNoChangeHandler}
          onBlur={contactNoBlurHandler}
          error={contactNoError}
          type='number'
          label={'Phone number'}
          placeholder='enter your contact number'
        />
        <Input
          value={address}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          error={addressError}
          type='text'
          label={'address'}
          className='col-span-2'
          placeholder='enter delivery address'
        />
        <Button onClick={handleSubmit} className='bg-cyan-400 mt-3 '>
          Order
        </Button>
      </form>
    </div>
  )
}

export default CheckOut
