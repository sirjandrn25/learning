import React from 'react'
import InputField from './UI/InputField'

const input_basic_class = 'border-2 px-3 py-1 w-full col-span-2 focus:outline-none  rounded-lg'
const input_normal_class = `${input_basic_class} focus:border-cyan-300`
const input_danger_class = `${input_basic_class} focus:border-red-500 bg-red-100`

const submit_basic = 'text-white font-medium px-5 py-1 rounded-2xl'
const submit_active_btn = `${submit_basic} bg-teal-300 hover:bg-teal-500 hover:border `
const submit_disable_btn = `${submit_basic} bg-teal-100 cursor-default `

const initialState = {
  value: '',
  isValid: false,
}

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'user_input':
      return { value: action.payload, isValid: action.payload.trim().includes('@') }
    default:
      return state
  }
}

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'user_input':
      return { value: action.payload, isValid: state.value.trim().length >= 8 }

    default:
      return state
  }
}

const LoginFormContainer = () => {
  const [email, dispatchEmail] = React.useReducer(emailReducer, initialState)
  const [password, dispatchPassword] = React.useReducer(passwordReducer, initialState)
  const [formValid, setFormValid] = React.useState(false)
  const { isValid: emailValid } = email
  const { isValid: passwordValid } = password

  React.useEffect(() => {
    let timeOut = setTimeout(() => {
      setFormValid(emailValid && passwordValid)
    }, 500)

    return () => {
      console.log('clean code')
      clearInterval(timeOut)
    }
  }, [emailValid, passwordValid])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
  }

  const handleEmailChange = (e) => {
    dispatchEmail({ type: 'user_input', payload: e.target.value })
  }
  const handlePasswordChange = (e) => {
    dispatchPassword({ type: 'user_input', payload: e.target.value })
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center '>
      <div className=' p-6 border-2 h-auto w-[600px] bg-white rounded-lg items-center'>
        <InputField
          type={'text'}
          handleChange={handleEmailChange}
          value={email.value}
          label={'Email Address'}
          isValid={emailValid}
        />
        <InputField
          type={'password'}
          value={password.value}
          label={'Password'}
          handleChange={handlePasswordChange}
          isValid={passwordValid}
        />

        <button
          disabled={!formValid}
          onClick={handleSubmit}
          className={formValid ? submit_active_btn : submit_disable_btn}>
          login
        </button>
      </div>
    </div>
  )
}

export default LoginFormContainer
